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

set -e

if [ -z "$PROJECT" ]
then
echo "No PROJECT variable set"
exit
fi

if [ -z "$LOCATION" ]
then
echo "No LOCATION variable set"
exit
fi

if [ -z "$CLUSTERNAME" ]
then
echo "No CLUSTERNAME variable set"
exit
fi

if [ -z "$API_GATEWAY_NAMESPACE" ]
then
echo "No API_GATEWAY_NAMESPACE variable set"
exit
fi

gcloud container clusters get-credentials $CLUSTERNAME \
--project=$PROJECT \
--zone=$LOCATION

kubectl config set-context $CLUSTERNAME

#kubectl delete services frontend-external -n frontend #this service is not needed for this demo

echo "Create namespace"
kubectl create namespace $API_GATEWAY_NAMESPACE

ASM_VERSION=$(kubectl get deploy -n istio-system -l app=istiod -o jsonpath={.items[*].metadata.labels.'istio\.io\/rev'}'{"\n"}')
kubectl label namespace $API_GATEWAY_NAMESPACE istio.io/rev=$ASM_VERSION --overwrite

echo "Create configmap for the proxyservice"
kubectl create configmap proxyconfig --from-file=kubernetes-manifests/config -n $API_GATEWAY_NAMESPACE

echo "Creating Ingress Gateway for the APIs "
kubectl apply -f kubernetes-manifests/api-ingressgateway/. -n $API_GATEWAY_NAMESPACE

