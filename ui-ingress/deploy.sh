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

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
set -e && pushd "${SCRIPT_DIR}"

UI_GATEWAY_NAMESPACE=${UI_GATEWAY_NAMESPACE:-ui-ingress}

echo "Deploying UI Ingress ..."
kubectl create namespace "${UI_GATEWAY_NAMESPACE}"

ASM_VERSION=$(kubectl get deploy -n istio-system -l app=istiod -o jsonpath={.items[*].metadata.labels.'istio\.io\/rev'}'{"\n"}')
kubectl label namespace "${UI_GATEWAY_NAMESPACE}" istio.io/rev=$ASM_VERSION --overwrite

kubectl delete service -n frontend frontend-external

gcloud compute addresses create ui-ingressgateway-ip --global --ip-version IPV4
export UI_INGRESSGATEWAY_IP=$(gcloud compute addresses describe ui-ingressgateway-ip --global  --format json | jq -r ".address")

sed -i -e "s/{ui-ingressgateway-ip}/${UI_INGRESSGATEWAY_IP}/g" kubernetes-manifests/deployment.yaml
kubectl apply -n "${UI_GATEWAY_NAMESPACE}" -f kubernetes-manifests/deployment.yaml

echo " "
echo "To view the online boutique portal, open the below URL in a new browser tab"
echo "----------------------------------------------------------------------------"
echo "https://${UI_INGRESSGATEWAY_IP}.nip.io"
echo " "
echo "NOTE: This could take a few minutes as the managed certificates needs to be provisioned"
echo " "