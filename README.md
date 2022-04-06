# apigee-asm-demo
Demo of Apigee X as API management layer on the [Anthos Service Mesh Online Boutique Quickstart Demo](https://cloud.google.com/service-mesh/docs/unified-install/quickstart-asm).

## Prerequisites
In GCP under **IAM > Organization Policies**, make sure these policies are configured as follows:

* constraints/iam.allowedPolicyMemberDomains should be allow all
* constraints/compute.requireShieldedVm should be turned off
* constraints/compute.vmExternalIpAccess should be allow all
* constraints/compute.requireOsLogin should be not enforced

## Deploy
Simply run these scripts as needed to deploy ASM, Gateway, and Apigee X with proxies and a developer portal.

```bash
./1.deploy-asm.sh # Deploy ASM with the Online Boutique app as described here: https://cloud.google.com/service-mesh/docs/unified-install/quickstart-asm

./2.deploy-gateway.sh # Deploy the gateway configuration to proxy the gRPC services as both gRPC and REST for public consumers

./3.deploy-apigee.sh # Provision an Apigee organization and provide a proxy and developer portal for external developers to access the ProductCatalog service.

```

You can deploy step 1 manually with the above link if wanted (create cluster + deploy ASM and Online Boutique).

After deploying you should be able to send test requests to the services with either curl or grpcurl for both the gRPC and REST services.

```bash
grpcurl -plaintext -proto pb/demo.proto 35.187.179.99:8080 hipstershop.ProductCatalogService/ListProducts # gRPC call to get product catalog data

curl http://35.187.179.99:8080/products # REST call to get product catalog data

curl https://eval-group.34-111-105-186.nip.io/productservice/products?apikey=aafddfsfdss2kjj3k2jl3jkl2jl323 # REST API secured with an API key in Apigee

```