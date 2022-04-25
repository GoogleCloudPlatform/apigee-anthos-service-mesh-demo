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

### Test the online boutique portal 

The script that deploys demo will also print the URL to open in a browser tab. If you do not see it in the console, you can follow the below instructions to get it again

First, let's get the IP address of the frontend ingress.

```sh
UI_IP=$(kubectl get ingress ui-ingressgateway -n $UI_GATEWAY_NAMESPACE -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo "UI_IP=${UI_IP}"
```

Use the IP address form the previous command, and open the below URL in a new browser tab.

```
https://${UI_IP}.nip.io
```

**Note**: It may take up to 10 minutes for the GCP Load balancer to be ready. If you don't see the Boutique Shop UI, wait and try again later.

--- 

## Deploy private API ingress

Next, let's deploy another ASM ingress that will be used by Apigee. This ingress has two main tasks. 

  * First, it translates incoming REST calls into proper gRPC calls that the mesh services understand. 

  * Second, it knows how to route to the underlying gRPC services. 

The ingress is deployed as an Internal Load Balancer which will be used as a Target server for all the Apigee proxies configured in the subsequent step.

```sh
./deploy-gateway.sh
```

--- 

## Deploy Apigee components

Next, let's create the Apigee resources necessary to expose the mesh services to external consumers.

```sh
./deploy-apigee.sh
```

This script creates an Apigee Target Server, and points it to the IP address of the private API ingress.
It also creates a set of API Proxies, API products, a sample App developer, and App.


### Test the APIs 

The script that deploys the Apigee API proxies prints a few sample cURL commands that you can use to test.
Those commands already have the necessary API key for each of the API calls.

---
## Conclusion

<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Congratulations! You've successfully used Apigee X to externalize several services from the GCP Online Boutique Shop demo.

<walkthrough-inline-feedback></walkthrough-inline-feedback>

##### Cleanup

For each fo the "deploy" scripts, there is an equivalent "cleanup" script you can run.
If you want to clean the entire setup, first source your `env.sh` script

```sh
source ./env.sh
```

and then run the scripts in the following order

```bash
./cleanup-apigee.sh
./cleanup-gateway.sh
./cleanup-asm.sh
```

Then, finally you can remove the GKE cluster with

```bash
./delete-gke-cluster.sh
```

##### What's next?

Learn more about the [Cloud Shell](https://cloud.google.com/shell) IDE environment and the [Cloud Code](https://cloud.google.com/code) extension.