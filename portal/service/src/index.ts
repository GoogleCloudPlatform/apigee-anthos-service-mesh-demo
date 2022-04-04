import fs from 'fs'
const path = require('path');
import express from 'express';
import cors from 'cors';
import yaml from 'js-yaml'
import admin from 'firebase-admin'

import { ApigeeService, ApiManagementInterface, Developers } from 'apigee-x-module'
import { applicationDefault } from 'firebase-admin/app';

require('dotenv').config()

admin.initializeApp({
  credential: applicationDefault()
});

const config = yaml.load(fs.readFileSync('./config/apiportal.yaml', 'utf8'));
const app = express();
const apigeeService: ApiManagementInterface = new ApigeeService();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const publicMethods = [
  "/apim/config",
  "/apim/apiproducts"
];

// Middleware to validate token
// app.use(function (req, res, next) {
//   if (publicMethods.includes(req.url) || !req.url.startsWith("/apim/")) {
//     next();
//   }
//   else if (!req.headers.authorization) {
//     return res.status(403).json({ error: 'No credentials sent!' });
//   }
//   else {
//     var bearer = req.headers.authorization.replace(/^Bearer\s/, '');
//     // idToken comes from the client app
//     admin.auth().verifyIdToken(bearer).then(function (decodedToken) {
//         var uid = decodedToken.uid;
//         req.headers["email"] = decodedToken["email"];
//         next();
//         // ...
//     }).catch(function (error) {
//         console.log("token validation error! " + error);
//         return res.status(403).json({ error: 'Invalid authorization token sent!' });
//         // Handle error
//     });
//   }
// });

app.get('/apim/config', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(config);
});

app.get('/apim/apiproducts', (req, res) => {
  apigeeService.getApiProducts().then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json');
      res.send({
        apiproducts: result.apiProducts
      });
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.get('/apim/apiproducts/:name', (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  var result;
  config.apis.forEach(element => {
    if (element.name == req.params.name) {
      result = element;
    }
  });

  if (result)
    res.send(result);
  else
    res.status(404).send({
      error: {
        code: 404,
        message: "Not found",
        status: "NOT_FOUND"
      }
    });
});

app.get('/apim/developers', (req, res) => {
  apigeeService.getDevelopers().then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')
      res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.post('/apim/developers', (req, res) => {

  apigeeService.createDeveloper(req.body).then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')

      if (result.error) {
        res.status(parseInt(result.error.code)).send({
          error: {
            code: parseInt(result.error.code),
            message: result.error.status,
            status: result.error.status
          }
        });
      }
      else
        res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.get('/apim/developers/:email', (req, res) => {
  apigeeService.getDeveloper(req.params.email).then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')

      if (result.error) {
        res.status(parseInt(result.error.code)).send({
          error: {
            code: parseInt(result.error.code),
            message: result.error.status,
            status: result.error.status
          }
        });
      }
      else
        res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.get('/apim/developers/:email/apps', (req, res) => {
  apigeeService.getApps(req.params.email).then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')

      if (result.error) {
        res.status(parseInt(result.error.code)).send({
          error: {
            code: parseInt(result.error.code),
            message: result.error.status,
            status: result.error.status
          }
        });
      }
      else
        res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.get('/apim/developers/:email/apps/:appName', (req, res) => {
  apigeeService.getApp(req.params.email, req.params.appName).then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')

      if (result.error) {
        res.status(parseInt(result.error.code)).send({
          error: {
            code: parseInt(result.error.code),
            message: result.error.status,
            status: result.error.status
          }
        });
      }
      else
        res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.post('/apim/developers/:email/apps', (req, res) => {
  apigeeService.createApp(req.params.email, req.body.name, req.body.apiProducts).then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')

      if (result.error) {
        res.status(parseInt(result.error.code)).send({
          error: {
            code: parseInt(result.error.code),
            message: result.error.status,
            status: result.error.status
          }
        });
      }
      res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.put('/apim/developers/:email/apps/:appName', (req, res) => {
  apigeeService.updateApp(req.params.email, req.body.name, req.body).then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')

      if (result.error) {
        res.status(parseInt(result.error.code)).send({
          error: {
            code: parseInt(result.error.code),
            message: result.error.status,
            status: result.error.status
          }
        });
      }
      res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.delete('/apim/developers/:email/apps/:appName', (req, res) => {
  apigeeService.deleteApp(req.params.email, req.params.appName).then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')

      if (result.error) {
        res.status(parseInt(result.error.code)).send({
          error: {
            code: parseInt(result.error.code),
            message: result.error.status,
            status: result.error.status
          }
        });
      }
      res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

app.put('/apim/developers/:email/apps/:appName/keys/:keyName', (req, res) => {
  apigeeService.updateAppCredential(req.params.email, req.params.appName, req.body).then((result) => {
    if (result) {
      res.setHeader('Content-Type', 'application/json')

      if (result.error) {
        res.status(parseInt(result.error.code)).send({
          error: {
            code: parseInt(result.error.code),
            message: result.error.status,
            status: result.error.status
          }
        });
      }
      res.send(result);
    }
  }).catch((error) => {
    console.error(error);

    res.status(500).send({
      error: {
        code: 500,
        message: "Server error",
        status: "SERVER_ERROR"
      }
    });
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  // res.sendFile(path.join(__dirname + '/../public/' + req.url.replace('/portal/', '')));
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.listen(8080, () => {
  return console.log(`server is listening on 8080`);
});