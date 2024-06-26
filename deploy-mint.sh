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

if [ -z "$APIGEE_HOST" ]
then
echo "No APIGEE_HOST variable set"
exit
fi

TOKEN=$(gcloud auth print-access-token)

echo "Installing apigeecli"
curl -s https://raw.githubusercontent.com/apigee/apigeecli/master/downloadLatest.sh | bash
export PATH=$PATH:$HOME/.apigeecli/bin
#APIGEECLI_VERSION=$(curl -s https://api.github.com/repos/apigee/apigeecli/releases/latest | jq .'name' -r)
#wget https://github.com/apigee/apigeecli/releases/download/${APIGEECLI_VERSION}/apigeecli_${APIGEECLI_VERSION}_Linux_x86_64.zip
#unzip apigeecli_${APIGEECLI_VERSION}_Linux_x86_64.zip
#mv apigeecli_${APIGEECLI_VERSION}_Linux_x86_64 apigeecli

echo "Creating API Product"
apigeecli products create --name Paid-Currency-v1 --displayname "Paid Currency Services v1" --proxies Currency-v1 --envs $APIGEE_ENV --approval auto --legacy --quota 10 --interval 1 --unit minute --org $PROJECT --token $TOKEN

echo "Create a rate plan"

curl "https://apigee.googleapis.com/v1/organizations/$PROJECT/apiproducts/Paid-Currency-v1/rateplans" \
  -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-type: application/json" \
  -d '{
    "apiproduct":"Paid-Currency-v1",
    "billingPeriod":"MONTHLY",
    "consumptionPricingType":"FIXED_PER_UNIT",
    "consumptionPricingRates":[{
       "fee":{
          "units": "0",
          "nanos": 250000000
        }
    }],
    "currencyCode":"USD",
    "startTime": 1650456000000,
    "displayName":"CurrencyPerUse",
	 "state":"PUBLISHED"
    }'

echo "Creating Developer"
apigeecli developers create --user payinguser --email payinguser_apigeeasmdemo@acme.com --first Paying --last User --org $PROJECT --token $TOKEN

echo "Creating Developer App"
apigeecli apps create --name paid-app --email payinguser_apigeeasmdemo@acme.com --prods Paid-Currency-v1 --org $PROJECT --token $TOKEN


curl "https://apigee.googleapis.com/v1/organizations/$PROJECT/developers/payinguser_apigeeasmdemo@acme.com/subscriptions" \
  -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-type: application/json" \
  -d '{"apiproduct":"Paid-Currency-v1"}'

curl -H "Authorization: Bearer $TOKEN" \
    -H "Content-type: application/json" \
    -X PUT \
    -d '{
    "billingType": "POSTPAID",
    }' https://apigee.googleapis.com/v1/organizations/$PROJECT/developers/payinguser_apigeeasmdemo@acme.com/monetizationConfig


APIKEY=$(apigeecli apps get --name paid-app --org $PROJECT --token $TOKEN --disable-check | jq ."[0].credentials[0].consumerKey" -r)

echo "Mint Demo is successfully deployed!"
echo "Use the below curl commands to test your demo"
echo " "
echo "To perform a currency conversion"
echo "--------------------------------"
echo "curl -X POST https://$APIGEE_HOST/v1/currencyservices/convert\?apikey\=GGTjuesm3xdH3YkGCmGKkUNi50rOPATmzyHAgA2Cl9zsVdCJ \\"
echo "-H \"Content-Type:application/json\" \\"
echo "-d '{\"to_code\": \"CHF\", \"from\": {\"currency_code\": \"USD\", \"units\": \"42\", \"nanos\": 0}}'"
echo " "

#rm -rf apigee/output apigeecli*