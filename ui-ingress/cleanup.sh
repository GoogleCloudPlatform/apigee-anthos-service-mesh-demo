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
pushd "${SCRIPT_DIR}"

UI_GATEWAY_NAMESPACE=${UI_GATEWAY_NAMESPACE:-ui-ingress}

echo "Cleaning UI Ingress ..."


kubectl delete -n "${UI_GATEWAY_NAMESPACE}" -f ./kubernetes-manifests/deployment.yaml

kubectl delete namespace "${UI_GATEWAY_NAMESPACE}"

gcloud compute addresses delete --global ui-ingressgateway-ip -q





