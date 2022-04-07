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
echo "No ILB_IP variable set, using example-apigee.com..."
export ILB_IP=$(kubectl get services api-ingressgateway -n $API_GATEWAY_NAMESPACE -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
fi

#echo "Testing if Apigee X is provisioned..."
#RUNTIME_IP=$(gcloud compute addresses describe lb-ipv4-vip-1 --format="get(address)" --global --project "$PROJECT" --quiet)
#if [ -z "$RUNTIME_IP" ]
#then
#echo "Provisioning Apigee..."
#curl -L https://raw.githubusercontent.com/apigee/devrel/main/tools/apigee-x-trial-provision/apigee-x-trial-provision.sh | bash -
#fi

echo "Deploying Apigee artifacts..."
cd proxy/
mkdir output
cp -R apiproxy output/
cd output
sed -i "s@{SERVER_URL}@https://$APIGEE_HOST@" apiproxy/resources/oas/productservice.yaml
zip -r ProductAPI.zip apiproxy
cd ../..
TOKEN=$(gcloud auth print-access-token)

echo "Configuring Apigee Targetserver..."
apigeecli targetservers get --name TS-ASM-Demo --org $PROJECT --env $APIGEE_ENV --token $TOKEN
if [ $? -eq 0 ]
then
    echo "Updating Target server"
    apigeecli targetservers update --name TS-ASM-Demo --host $ILB_IP --port 80 --enable true --org $PROJECT --env $APIGEE_ENV --token $TOKEN
else
    echo "Creating Target server"
    apigeecli targetservers create --name TS-ASM-Demo --host $ILB_IP --port 80 --enable true --org $PROJECT --env $APIGEE_ENV --token $TOKEN
fi

echo "Importing and Deploying Apigee proxy..."
REV=$(apigeecli apis import -f proxy/output/ProductAPI.zip --org $PROJECT --token $TOKEN | jq ."revision" -r)
apigeecli apis deploy-wait --name ProductAPI --ovr --rev $REV --org $PROJECT --env $APIGEE_ENV --token $TOKEN

#echo "Creating OpenAPI spec with correct server URL..."
#RUNTIME_IP=$(gcloud compute addresses describe lb-ipv4-vip-1 --format="get(address)" --global --project "$PROJECT" --quiet) 
#cp specs/productservice.yaml portal/client/productservice.yaml
#sed -i "s@{SERVER_URL}@https://eval-group.$RUNTIME_IP.nip.io@" portal/client/productservice.yaml

#echo "Build and deploy portal..."
#gcloud builds submit --tag eu.gcr.io/$PROJECT/apigee-service-portal
#gcloud run deploy apigee-service-portal --image eu.gcr.io/$PROJECT/apigee-service-portal --platform managed --project $PROJECT \
#  --region europe-west1 --allow-unauthenticated

rm -rf proxy/output