#!/bin/bash

# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

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

TOKEN=$(gcloud auth print-access-token)
TARGETSERVER_NAME=TS-ASM-Demo
APP_NAME=ASM-Demo-App

echo "Installing apigeecli"
APIGEECLI_VERSION=$(curl -s https://api.github.com/repos/apigee/apigeecli/releases/latest | jq .'name' -r)
wget https://github.com/srinandan/apigeecli/releases/download/${APIGEECLI_VERSION}/apigeecli_${APIGEECLI_VERSION}_Linux_x86_64.zip
unzip apigeecli_${APIGEECLI_VERSION}_Linux_x86_64.zip
mv apigeecli_${APIGEECLI_VERSION}_Linux_x86_64 apigeecli

echo "Deleting Developer App"
DEVELOPER_ID=$(./apigeecli/apigeecli developers get --email testuser_apigeeasmdemo@acme.com --org $PROJECT --token $TOKEN | jq .'developerId' -r)
./apigeecli/apigeecli apps delete --id $DEVELOPER_ID --name $APP_NAME --org $PROJECT --token $TOKEN

echo "Deleting Developer"
./apigeecli/apigeecli developers delete --email testuser_apigeeasmdemo@acme.com --org $PROJECT --token $TOKEN

echo "Deleting API Products"
./apigeecli/apigeecli products delete --name Currency-v1 --org $PROJECT --token $TOKEN
./apigeecli/apigeecli products delete --name Products-v1 --org $PROJECT --token $TOKEN
./apigeecli/apigeecli products delete --name Orders-v1 --org $PROJECT --token $TOKEN

echo "Undeploying Currency-v1"
REV=$(./apigeecli/apigeecli envs deployments get --env $APIGEE_ENV --org $PROJECT --token $TOKEN | jq .'deployments[]| select(.apiProxy=="Currency-v1").revision' -r)
./apigeecli/apigeecli apis undeploy --name Currency-v1 --env $APIGEE_ENV --rev $REV --org $PROJECT --token $TOKEN

echo "Deleting proxy Currency-v1"
./apigeecli/apigeecli apis delete --name Currency-v1 --org $PROJECT --token $TOKEN

echo "Undeploying Products-v1"
REV=$(./apigeecli/apigeecli envs deployments get --env $APIGEE_ENV --org $PROJECT --token $TOKEN | jq .'deployments[]| select(.apiProxy=="Products-v1").revision' -r)
./apigeecli/apigeecli apis undeploy --name Products-v1 --env $APIGEE_ENV --rev $REV --org $PROJECT --token $TOKEN

echo "Deleting proxy Products-v1"
./apigeecli/apigeecli apis delete --name Products-v1 --org $PROJECT --token $TOKEN

echo "Undeploying Orders-v1"
REV=$(./apigeecli/apigeecli envs deployments get --env $APIGEE_ENV --org $PROJECT --token $TOKEN | jq .'deployments[]| select(.apiProxy=="Orders-v1").revision' -r)
./apigeecli/apigeecli apis undeploy --name Orders-v1 --env $APIGEE_ENV --rev $REV --org $PROJECT --token $TOKEN

echo "Deleting proxy Orders-v1"
./apigeecli/apigeecli apis delete --name Orders-v1 --org $PROJECT --token $TOKEN

echo "Undeploying SF-Security-v1"
REV=$(./apigeecli/apigeecli sharedflows listdeploy --env $APIGEE_ENV --org $PROJECT --token $TOKEN | jq .'deployments[]| select(.apiProxy=="SF-Security-v1").revision' -r)
./apigeecli/apigeecli sharedflows undeploy --name SF-Security-v1 -e $APIGEE_ENV --rev $REV --org $PROJECT --token $TOKEN  

echo "Deleting sharedflow SF-Security-v1"
./apigeecli/apigeecli sharedflows delete --name SF-Security-v1 --org $PROJECT --token $TOKEN

echo "Deleting Target Server"
./apigeecli/apigeecli targetservers delete --name $TARGETSERVER_NAME --org $PROJECT --env $APIGEE_ENV --token $TOKEN

rm -rf apigeecli*