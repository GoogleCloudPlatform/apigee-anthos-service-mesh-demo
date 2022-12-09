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

API_GATEWAY_NAMESPACE=${API_GATEWAY_NAMESPACE:-api-ingress}


echo "Deploying API Ingress ..."
kubectl create namespace "${API_GATEWAY_NAMESPACE}"

kubectl label namespace "${API_GATEWAY_NAMESPACE}" istio-injection=enabled

kubectl apply -n "${API_GATEWAY_NAMESPACE}" -f  ./kubernetes-manifests/deployment.yaml

kubectl create -n "${API_GATEWAY_NAMESPACE}" configmap proto --from-file=../pb/gen/proto.pb

kubectl apply -n "${API_GATEWAY_NAMESPACE}" -f ./kubernetes-manifests/serviceaccount.yaml

kubectl apply -n "${API_GATEWAY_NAMESPACE}" -f ./kubernetes-manifests/role.yaml

kubectl apply -n "${API_GATEWAY_NAMESPACE}" -f ./kubernetes-manifests/envoy-filter.yaml

kubectl apply -n "${API_GATEWAY_NAMESPACE}" -f ./kubernetes-manifests/service.yaml

kubectl apply -n "${API_GATEWAY_NAMESPACE}" -f ./kubernetes-manifests/istio-gateway.yaml