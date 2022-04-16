#!/bin/bash

#echo "Enabling APIs..."
#gcloud services enable cloudbuild.googleapis.com

if [ -z "$PROJECT" ]
then
echo "No PROJECT variable set"
exit
fi

if [ -z "$LOCATION" ]
then
echo "No LOCATION variable set"
exit
fi

if [ -z "$APIGEE_ENV" ]
then
echo "No APIGEE_ENV variable set"
exit
fi

if [ -z "$APIGEE_HOST" ]
then
echo "No APIGEE_HOST variable set"
exit
fi

if [ -z "$API_GATEWAY_NAMESPACE" ]
then
echo "No API_GATEWAY_NAMESPACE variable set"
exit
fi

if [ -z "$ILB_IP" ]
then
echo "No ILB_IP variable set"
export ILB_IP=$(kubectl get services api-ingressgateway -n $API_GATEWAY_NAMESPACE -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
fi

TOKEN=$(gcloud auth print-access-token)
TARGETSERVER_NAME=TS-ASM-Demo
APP_NAME=ASM-Demo-App

echo "Installing apigeecli"
APIGEECLI_VERSION=$(curl -s https://api.github.com/repos/srinandan/apigeecli/releases/latest | jq .'name' -r)
wget https://github.com/srinandan/apigeecli/releases/download/${APIGEECLI_VERSION}/apigeecli_${APIGEECLI_VERSION}_Linux_x86_64.zip
unzip apigeecli_${APIGEECLI_VERSION}_Linux_x86_64.zip
mv apigeecli_${APIGEECLI_VERSION}_Linux_x86_64 apigeecli

#echo "Testing if Apigee X is provisioned..."
#RUNTIME_IP=$(gcloud compute addresses describe lb-ipv4-vip-1 --format="get(address)" --global --project "$PROJECT" --quiet)
#if [ -z "$RUNTIME_IP" ]
#then
#echo "Provisioning Apigee..."
#curl -L https://raw.githubusercontent.com/apigee/devrel/main/tools/apigee-x-trial-provision/apigee-x-trial-provision.sh | bash -
#fi

echo "Deploying Apigee artifacts..."
cd apigee
mkdir output
cd output
cp -R ../proxies/* .
cp -R ../sharedflows/* .

cd Products-v1
sed -i "s@{SERVER_URL}@https://$APIGEE_HOST@" apiproxy/resources/oas/productservices.yaml
zip -r ../Products-v1.zip apiproxy

cd ..

cd Currency-v1
sed -i "s@{SERVER_URL}@https://$APIGEE_HOST@" apiproxy/resources/oas/currencyservices.yaml
zip -r ../Currency-v1.zip apiproxy

cd ..

cd Orders-v1
sed -i "s@{SERVER_URL}@https://$APIGEE_HOST@" apiproxy/resources/oas/orderservices.yaml
zip -r ../Orders-v1.zip apiproxy

cd ..
cd SF-Security-v1/
zip -r ../SF-Security-v1.zip sharedflowbundle

cd ../../../

echo "Configuring Apigee Targetserver..."
./apigeecli/apigeecli targetservers get --name $TARGETSERVER_NAME --org $PROJECT --env $APIGEE_ENV --token $TOKEN
if [ $? -eq 0 ]
then
    echo "Updating Target server"
    ./apigeecli/apigeecli targetservers update --name $TARGETSERVER_NAME --host $ILB_IP --port 80 --enable true --org $PROJECT --env $APIGEE_ENV --token $TOKEN
else
    echo "Creating Target server"
    ./apigeecli/apigeecli targetservers create --name $TARGETSERVER_NAME --host $ILB_IP --port 80 --enable true --org $PROJECT --env $APIGEE_ENV --token $TOKEN
fi

echo "Importing and Deploying Security Sharedflow"
REV=$(./apigeecli/apigeecli sharedflows import -f apigee/output/SF-Security-v1.zip --org $PROJECT --token $TOKEN | jq ."revision" -r)
./apigeecli/apigeecli sharedflows deploy --name SF-Security-v1 --ovr --rev $REV --org $PROJECT --env $APIGEE_ENV --token $TOKEN

echo "Importing and Deploying Apigee Products-v1 proxy..."
REV=$(./apigeecli/apigeecli apis import -f apigee/output/Products-v1.zip --org $PROJECT --token $TOKEN | jq ."revision" -r)
./apigeecli/apigeecli apis deploy-wait --name Products-v1 --ovr --rev $REV --org $PROJECT --env $APIGEE_ENV --token $TOKEN

echo "Creating API Product"
./apigeecli/apigeecli products create --name Products-v1 --displayname "Products Services v1" --proxies Products-v1 --envs $APIGEE_ENV --approval auto --legacy --org $PROJECT --token $TOKEN


echo "Importing and Deploying Apigee Currency-v1 proxy..."
REV=$(./apigeecli/apigeecli apis import -f apigee/output/Currency-v1.zip --org $PROJECT --token $TOKEN | jq ."revision" -r)
./apigeecli/apigeecli apis deploy-wait --name Currency-v1 --ovr --rev $REV --org $PROJECT --env $APIGEE_ENV --token $TOKEN

echo "Creating API Product"
./apigeecli/apigeecli products create --name Currency-v1 --displayname "Currency Services v1" --proxies Currency-v1 --envs $APIGEE_ENV --approval auto --legacy --org $PROJECT --token $TOKEN

echo "Importing and Deploying Apigee Orders-v1 proxy..."
REV=$(./apigeecli/apigeecli apis import -f apigee/output/Orders-v1.zip --org $PROJECT --token $TOKEN | jq ."revision" -r)
./apigeecli/apigeecli apis deploy-wait --name Orders-v1 --ovr --rev $REV --org $PROJECT --env $APIGEE_ENV --token $TOKEN

echo "Creating API Product"
./apigeecli/apigeecli products create --name Orders-v1 --displayname "Order Services v1" --proxies Orders-v1 --envs $APIGEE_ENV --approval auto --legacy --org $PROJECT --token $TOKEN


echo "Creating Developer"
./apigeecli/apigeecli developers create --user testuser --email testuser@acme.com --first Test --last User --org $PROJECT --token $TOKEN

echo "Creating Developer App"
./apigeecli/apigeecli apps create --name $APP_NAME --email testuser@acme.com --prods Products-v1 --prods Orders-v1 --prods Currency-v1 --org $PROJECT --token $TOKEN

APIKEY=$(./apigeecli/apigeecli apps get --name $APP_NAME --org $PROJECT --token $TOKEN | jq ."[0].credentials[0].consumerKey" -r)

#echo "Creating OpenAPI spec with correct server URL..."
#RUNTIME_IP=$(gcloud compute addresses describe lb-ipv4-vip-1 --format="get(address)" --global --project "$PROJECT" --quiet) 
#cp specs/productservice.yaml portal/client/productservice.yaml
#sed -i "s@{SERVER_URL}@https://eval-group.$RUNTIME_IP.nip.io@" portal/client/productservice.yaml

#echo "Build and deploy portal..."
#gcloud builds submit --tag eu.gcr.io/$PROJECT/apigee-service-portal
#gcloud run deploy apigee-service-portal --image eu.gcr.io/$PROJECT/apigee-service-portal --platform managed --project $PROJECT \
#  --region europe-west1 --allow-unauthenticated

echo "Proxy deploy"
echo "Run curl https://$APIGEE_HOST/v1/productservices/products?apikey=$APIKEY to get the list of products"
echo "Run curl https://$APIGEE_HOST/v1/currencyservices/currencies?apikey=$APIKEY to get the list of currencies"
echo "Run curl -X POST 'https://$APIGEE_HOST/v1/orderservices/orders?apikey=$APIKEY' \
  -H 'content-type: application/json' \
  -d '{
  \""user_id\"": \""johndoe\"",
  \""email\"": \""johndoe@acme.com\"",
  \""currency\"": \""USD\"",
  \""items\"": [
    {
     \""id\"": \""6E92ZMYYFZ\"",
     \""quantity\"": 2
    }
  ],
  \""address\"": {
     \""street\"": \""111 Aspen Court\"",
     \""city\"": \""Quincy\"",
     \""state\"": \""Massachusetts\"",
     \""country\"": \""US\"",
     \""zip\"": 32169
   },
   \""credit_card\"": {
     \""number\"": \""4263982640269299\"",
     \""cvv\"": 837,
     \""exp_year\"": 2023,
     \""exp_month\"": 2
   }
}'"

rm -rf apigee/output apigeecli*