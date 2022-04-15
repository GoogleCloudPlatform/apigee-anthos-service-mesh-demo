'use strict';

let PROTO_PATH = __dirname + '/../proto/hipstershop.proto';
let util = require('util');
let assert = require('assert');
let grpc = require('@grpc/grpc-js');
let protoLoader = require('@grpc/proto-loader');
let packageDefinition = protoLoader.loadSync(PROTO_PATH,
    { includeDirs: [__dirname + '/../proto/googleapis'], keepCase: true, enums: String, defaults: true, oneofs: true });
let protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
let hipsterShop = protoDescriptor.hipstershop;

if (!process.env.CHECKOUT_SERVICE) {
    throw new Error("CHECKOUT_SERVICE env var is required");
}

if (!process.env.CART_SERVICE) {
    throw new Error("CART_SERVICE env var is required");
}

let cartService = new hipsterShop.CartService(process.env.CART_SERVICE, grpc.credentials.createInsecure());
let checkoutService = new hipsterShop.CheckoutService(process.env.CHECKOUT_SERVICE, grpc.credentials.createInsecure());

let emptyCartSync = util.promisify(cartService.emptyCart).bind(cartService);
let addItemSync = util.promisify(cartService.addItem).bind(cartService);
let placeOrderSync = util.promisify(checkoutService.placeOrder).bind(checkoutService);


function doSayHello(call, callback) {

    //TODO: take order

    callback(null, {
        message: 'Hello! ' + call.request.name
    });
}

async function validateOrderRequest(req) {
    if (!req.user_id) {
        throw  {code: 400, message: "User id is required"};
    }

    if (!req || !req.items || req.items.length == 0) {
        throw  {code: 400, message: "No items found in order"};
    }
    if (!req.address) {
        throw {code: 400, message: "Address is required"};
    }

    if (!req.credit_card) {
        throw {code: 400, message: "Credit card is required"};
    }

    if (!req.currency) {
        throw {code: 400, message: "Current code is required"}
    }
}
async function doSubmitOrder(call, callback) {
    try {
        let req = call.request;
        await validateOrderRequest(req);

        //empty the cart
        try {
            await emptyCartSync({
                user_id: req.user_id
            });
        } catch(ex) {
            throw {code: 400, message: "Could not initialize order"}
        }

        //add order items to the cart
        for (let item of req.items) {
            try {
                await addItemSync({
                    "user_id": req.user_id,
                    "item": {
                        "product_id": item.id,
                        "quantity": item.quantity
                    }
                })
            } catch(ex) {
                throw {code: 400, message: "Could not add item to order. " + ex.message}
            }
        }

        let orderReq = {
            "user_id": req.user_id,
            "user_currency": req.currency,
            "email": req.email,
            "address": {
                "street_address": req.address.street,
                "city": req.address.city,
                "state": req.address.state,
                "country": req.address.country,
                "zip_code": req.address.zip
            },
            "credit_card": {
                "credit_card_number": req.credit_card.number,
                "credit_card_cvv": req.credit_card.cvv,
                "credit_card_expiration_year": req.credit_card.exp_year,
                "credit_card_expiration_month": req.credit_card.exp_month
            }
        };

        //place the order
        let orderRes = null;
        try {
            orderRes = await placeOrderSync(orderReq);
        } catch (ex) {
            throw {code: 400, message: "Could not place order. " + ex.message};
        }

        let res = {
            id: orderRes.order.order_id,
            shipping_id: orderRes.order.shipping_tracking_id,
            shipping_cost: orderRes.order.shipping_cost.units + orderRes.order.shipping_cost.nanos / Math.pow(10,9) ,
            shipping_address: {
                street: orderRes.order.shipping_address.street_address,
                city: orderRes.order.shipping_address.city,
                state: orderRes.order.shipping_address.state,
                zip: orderRes.order.shipping_address.zip_code
            },
            items: []
        }

        for (let item of orderRes.order.items) {
            res.items.push({
                id: item.item.product_id,
                quantity: item.item.quantity,
                cost: (item.cost.units + item.cost.nanos /  Math.pow(10,9) )
            })
        }

        callback(null, res);
    } catch(ex) {
        callback(ex, null);
    }
}

let server = new grpc.Server();
server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
    assert.ifError(err);
    server.addService(hipsterShop.OrderService.service, {
        sayHello: doSayHello,
        submitOrder: doSubmitOrder
    });
    server.start();
});
