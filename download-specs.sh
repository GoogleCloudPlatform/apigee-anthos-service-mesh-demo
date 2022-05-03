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

if [ -z "$APIGEE_HOST" ]
then
echo "No APIGEE_HOST variable set"
exit
fi

mkdir specs;
cd specs;
echo "Downloading the specs..."
curl https://raw.githubusercontent.com/GoogleCloudPlatform/apigee-anthos-service-mesh-demo/main/portal/api-catalog/apis/currency-services/currencyservices.yaml --output currencyservices.yaml
curl https://raw.githubusercontent.com/GoogleCloudPlatform/apigee-anthos-service-mesh-demo/main/portal/api-catalog/apis/product-services/productservices.yaml --output productservices.yaml
curl https://raw.githubusercontent.com/GoogleCloudPlatform/apigee-anthos-service-mesh-demo/main/portal/api-catalog/apis/order-services/orderservices.yaml --output orderservices.yaml

echo "Updating the APIGEE Host in the specs"
sed -i "s/{APIGEE_HOST}/$APIGEE_HOST/" *.yaml