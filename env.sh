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


export PROJECT="<GCP_PROJECT_ID>"
export NETWORK="<K8S_CLUSTER_VPC_NETWORK>"
export SUBNETWORK="<K8S_CLUSTER_VPC_SUBNET>"
export LOCATION="<K8S_CLUSTER_ZONE>"
export CLUSTERNAME="<K8S_CLUSTER_NAME>"
export UI_GATEWAY_NAMESPACE="ui-ingress"
export API_GATEWAY_NAMESPACE="api-ingress"
export APIGEE_HOST="<APIGEE_DOMAIN_NAME>"
export APIGEE_ENV="<APIGEE_ENVIRONMENT_NAME>"

gcloud config set project $PROJECT