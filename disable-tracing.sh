#!/usr/bin/env bash

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

echo "Disabling Tracing on Boutique Services ..."

set -e

if [ -z "$PROJECT" ]
then
echo "No PROJECT variable set"
exit
fi




array=(
  'cart/cartservice'
  'checkout/checkoutservice'
  'ad/adservice'
  'currency/currencyservice'
  'email/emailservice'
  'frontend/frontend'
  'loadgenerator/loadgenerator'
  'recommendation/recommendationservice'
  'product-catalog/productcatalogservice'
  'payment/paymentservice'
  'shipping/shippingservice'
  'orders/orderservice'
)

for index in "${array[@]}" ; do
    ns="${index%%/*}"
    name="${index##*/}"
    kubectl wait deployment -n "${ns}" "${name}"  --timeout=300s --for condition=Available=True
    kubectl set env "deployment/${name}" -n "${ns}" DISABLE_TRACING=1
done


curl -v -H "Authorization: Bearer $(gcloud auth print-access-token)" \
    -H "Content-Type: application/json" \
    "https://apigee.googleapis.com/v1/organizations/${PROJECT}/environments/${APIGEE_ENV}/traceConfig" \
    -X PATCH \
    -d "$(cat << EOF
{
  "exporter":"CLOUD_TRACE",
  "endpoint": "${PROJECT}",
  "samplingConfig": {
    "sampler": "OFF",
    "samplingRate": 0.5
  }
}
EOF
)"
