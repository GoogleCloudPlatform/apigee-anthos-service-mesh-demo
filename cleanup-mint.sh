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

if [ -z "$APIGEE_ENV" ]
then
echo "No APIGEE_ENV variable set"
exit
fi

TOKEN=$(gcloud auth print-access-token)

APP_NAME=paid-app


echo "Installing apigeecli"
APIGEECLI_VERSION=$(curl -s https://api.github.com/repos/apigee/apigeecli/releases/latest | jq .'name' -r)
wget https://github.com/apigee/apigeecli/releases/download/${APIGEECLI_VERSION}/apigeecli_${APIGEECLI_VERSION}_Linux_x86_64.zip
unzip apigeecli_${APIGEECLI_VERSION}_Linux_x86_64.zip
mv apigeecli_${APIGEECLI_VERSION}_Linux_x86_64 apigeecli

echo "Deleting Developer App"
DEVELOPER_ID=$(./apigeecli/apigeecli developers get --email payinguser_apigeeasmdemo@acme.com --org $PROJECT --token $TOKEN | jq '.developerId' -r)
./apigeecli/apigeecli apps delete --id $DEVELOPER_ID --name $APP_NAME --org $PROJECT --token $TOKEN

echo "Deleting Developer"
./apigeecli/apigeecli developers delete --email payinguser_apigeeasmdemo@acme.com --org $PROJECT --token $TOKEN

echo "Deleting Rateplan"
PLAN_ID=$(curl "https://apigee.googleapis.com/v1/organizations/$PROJECT/apiproducts/Paid-Currency-v1/rateplans"  \
  -H "Authorization: Bearer $TOKEN" | jq '.ratePlans[0].name' -r)

curl -X DELETE "https://apigee.googleapis.com/v1/organizations/$PROJECT/apiproducts/Paid-Currency-v1/rateplans/$PLAN_ID"  \
  -H "Authorization: Bearer $TOKEN"

echo "Deleting API Product"
./apigeecli/apigeecli products delete --name Paid-Currency-v1 --org $PROJECT --token $TOKEN

rm -rf apigeecli*