# Apigee + ASM Demo

---
This tutorial shows you how to expose gRPC service inside Anthos Service Mesh as RESTful APIs for external consumption using Apigee X.

Let's get started!

---

## Setup environment

Edit the provided sample `env.sh` file, and set the environment variables there.

Click <walkthrough-editor-open-file filePath="env.sh">here</walkthrough-editor-open-file> to open the file in the editor

Then, source the `env.sh` file in the Cloud shell.

```sh
source ./env.sh
```

---

## Create a GKE cluster

If you already have a GKE cluster you want to use, you can skip this step.

Now, let's create a GKE cluster. Use the provided script to do this:

```sh
./create-gke-cluster.sh
```

<walkthrough-footnote>This will take a few mins. If you already have a GKE cluster and would like to use that, you can skip this step</walkthrough-footnote>

---

## Install Anthos Service Mesh & Boutique Shop

Next, let's install Anthos Service Mesh into the cluster, as well as the Boutique shop demo.

```sh
./deploy-asm.sh
```
**Note**: This will take a few mins

This script also creates an ASM ingress to expose the Boutique Shop UI externally. 
You can test connectivity now by visiting the Boutique shop UI in your browser.

First, let's get the IP address of the frontend ingress.

```sh
FRONTEND_IP=$(kubectl get service istio-ingressgateway  -n $FRONTEND_GATEWAY_NAMESPACE -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
echo "FRONTEND_IP=${FRONTEND_IP}"
```

Use the IP address form the previous command, and visit

```
https://${FRONTEND_IP}
```

--- 

## Deploy Apigee components

Next, let's create the Apigee resources necessary to expose the mesh services to external consumers.

```sh
./deploy-apigee.sh
```

This script creates an Apigee Target Server, and points it to the IP address of the private API ingress.
It also creates a set of API Proxies, API products, a sample App developer, and App.


## Test the APIs 

The script that deploys the Apigee API proxies prints a few sample cURL commands that you can use to test.

---
## Conclusion

<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Congratulations! You've successfully used Apigee X to externalize several services from the GCP Online Boutique Shop demo.

<walkthrough-inline-feedback></walkthrough-inline-feedback>

##### What's next?

Learn more about the [Cloud Shell](https://cloud.google.com/shell) IDE environment and the [Cloud Code](https://cloud.google.com/code) extension.