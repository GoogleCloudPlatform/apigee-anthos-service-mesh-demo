#!/bin/bash

echo "Enabling APIs..."
gcloud services enable cloudbuild.googleapis.com

if [ -z "$PROJECT" ]
then
echo "No PROJECT variable set, trying to use gcloud current project..."
export PROJECT=$(gcloud config get-value project)
echo "PROJECT set to $PROJECT"
fi

if [ -z "$LOCATION" ]
then
echo "No LOCATION variable set, using europe-west1..."
export LOCATION="europe-west1-c"
fi

echo "Testing if Apigee X is provisioned..."
RUNTIME_IP=$(gcloud compute addresses describe lb-ipv4-vip-1 --format="get(address)" --global --project "$PROJECT" --quiet)
if [ -z "$RUNTIME_IP" ]
then
echo "Provisioning Apigee..."
curl -L https://raw.githubusercontent.com/apigee/devrel/main/tools/apigee-x-trial-provision/apigee-x-trial-provision.sh | bash -
fi

echo "Deploying Product Catalog proxy..."
cd proxy/
mkdir output
zip -r output/ProductAPI.zip apiproxy
cd ..
wget -r https://github.com/srinandan/apigeecli/releases/download/v1.106/apigeecli_v1.106_Linux_x86_64.zip
unzip -o apigeecli_v1.106_Linux_x86_64.zip
cd apigeecli_v1.106_Linux_x86_64
TOKEN=$(gcloud auth print-access-token)
./apigeecli apis import -t $TOKEN -f proxy/output -o $PROJECT
cd ..

echo "Creating OpenAPI spec with correct server URL..."
RUNTIME_IP=$(gcloud compute addresses describe lb-ipv4-vip-1 --format="get(address)" --global --project "$PROJECT" --quiet) 
cp specs/productservice.yaml portal/client/productservice.yaml
sed -i "s@{SERVER_URL}@https://eval-group.$RUNTIME_IP.nip.io@" portal/client/productservice.yaml

echo "Build and deploy portal..."
gcloud builds submit --tag eu.gcr.io/$PROJECT/apigee-service-portal
gcloud run deploy apigee-service-portal --image eu.gcr.io/$PROJECT/apigee-service-portal --platform managed --project $PROJECT \
  --region europe-west1 --allow-unauthenticated
