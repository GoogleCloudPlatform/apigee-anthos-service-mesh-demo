# apigee-asm-demo
Demo of Apigee X as API management layer on the [Anthos Service Mesh Online Boutique Quickstart Demo](https://cloud.google.com/service-mesh/docs/unified-install/quickstart-asm).

## Prerequisites
1. In GCP under **IAM > Organization Policies**, make sure these policies are configured as follows:

* constraints/iam.allowedPolicyMemberDomains should be allow all
* constraints/compute.requireShieldedVm should be turned off
* constraints/compute.vmExternalIpAccess should be allow all
* constraints/compute.requireOsLogin should be not enforced

2. Provision Apigee Org and configure the Environment and Environment group

### Tools

* gcloud SDK
* curl
* apigeecli

## Deploy
Simply run these scripts as needed to deploy ASM, Gateway, and Apigee X with proxies and a developer portal.

```bash
./1.deploy-asm.sh # Deploy ASM with the Online Boutique app as described here: https://cloud.google.com/service-mesh/docs/unified-install/quickstart-asm

./2.deploy-gateway.sh # Deploy the gateway configuration to proxy the gRPC services as both gRPC and REST for public consumers

./3.deploy-apigee.sh # Deploy a proxy to Apigee

```

You can deploy step 1 manually with the above link if wanted (create cluster + deploy ASM and Online Boutique).

After deploying you should be able to send test requests to the services with either curl or grpcurl for both the gRPC and REST services.

From a GCE VM within the same VPC
```bash

export ILB_IP=$(kubectl get services api-ingressgateway -n $API_GATEWAY_NAMESPACE -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

grpcurl -plaintext -proto pb/demo.proto $ILB_IP hipstershop.ProductCatalogService/ListProducts # gRPC call to get product catalog data

curl http://$ILB_IP/products # REST call to get product catalog data

```

For the Apigee endpoint:

```bash

curl https://{APIGEE_HOST}/productservice/products?apikey=aafddfsfdss2kjj3k2jl3jkl2jl323 # REST API secured with an API key in Apigee

```