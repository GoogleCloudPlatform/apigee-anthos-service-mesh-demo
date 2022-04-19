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

#!/usr/bin/env bash

echo "Re-deploying the proxyservice ..."
export API_GATEWAY_NAMESPACE="api-ingress"

echo "Re-creating config map ..."
kubectl delete configmap -n ${API_GATEWAY_NAMESPACE} proxyconfig;
kubectl create configmap -n ${API_GATEWAY_NAMESPACE} proxyconfig --from-file=./config

echo "Applying proxyservice updates ..."
kubectl apply -n ${API_GATEWAY_NAMESPACE} -f ./api-ingressgateway/proxy-service.yaml

echo "Scaling down proxyservice pods ..."
kubectl scale -n ${API_GATEWAY_NAMESPACE} --replicas=0 deployment proxyservice
kubectl wait deployment -n ${API_GATEWAY_NAMESPACE} proxyservice --for condition=Available=True --timeout=30s

echo "Scaling up proxyservice pods ..."
kubectl scale --replicas=1 -n ${API_GATEWAY_NAMESPACE} deployment proxyservice
kubectl wait deployment -n ${API_GATEWAY_NAMESPACE} proxyservice --for condition=Available=True --timeout=30s