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

echo "Deploying orderservice ..."
echo "Creating orders namespace"
kubectl create namespace orders

kubectl label namespace orders istio-injection=enabled

echo "Deploying orders service application code"
kubectl apply -n orders -f ./kubernetes-manifests/orderservice-staging.yaml
kubectl wait pod -n orders orderservice-staging --for condition=Ready=True --timeout=60s
kubectl cp -n orders ./dist/Linux/orderservice orderservice-staging:/data/
kubectl exec -it -n orders orderservice-staging -- bash -c "touch /data/ready"
kubectl delete -n orders pod orderservice-staging

echo "Deploying orders service"
kubectl apply -n orders -f ./kubernetes-manifests/orderservice.yaml

set +e && popd