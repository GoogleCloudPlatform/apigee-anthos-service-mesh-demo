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

if [ -z "$FRONTEND_GATEWAY_NAMESPACE" ]
then
echo "No GATEWAY_NAMESPACE variable set"
exit
fi

#echo "Creating cluster..."
#gcloud container clusters create $CLUSTERNAME \
    #--project=$PROJECT \
    #--zone=$LOCATION \
    #--machine-type=e2-standard-4 \
    #--num-nodes=2 \
    #--workload-pool=$PROJECT.svc.id.goog

gcloud container clusters get-credentials $CLUSTERNAME \
--project=$PROJECT \
--zone=$LOCATION

kubectl config set-context $CLUSTERNAME

echo "Installing ASM..."
curl -s https://storage.googleapis.com/csm-artifacts/asm/asmcli_1.13 > asmcli
chmod +x asmcli

sleep 5s

./asmcli install \
  --project_id $PROJECT \
  --cluster_name $CLUSTERNAME \
  --cluster_location $LOCATION \
  --fleet_id $PROJECT \
  --output_dir asmoutput \
  --enable_all \
  --ca mesh_ca

sleep 10s

echo "Deploying ASM Gateway..."
kubectl create namespace $FRONTEND_GATEWAY_NAMESPACE

export REVISION=$(kubectl get deploy -n istio-system -l app=istiod -o \
  jsonpath={.items[*].metadata.labels.'istio\.io\/rev'}'{"\n"}')

kubectl label namespace $FRONTEND_GATEWAY_NAMESPACE istio.io/rev=$REVISION --overwrite

kubectl apply -n $FRONTEND_GATEWAY_NAMESPACE -f asmoutput/samples/gateways/istio-ingressgateway

echo "Deploying Online Boutique sample application..."
kubectl apply -f \
  asmoutput/samples/online-boutique/kubernetes-manifests/namespaces

for ns in ad cart checkout currency email frontend loadgenerator payment product-catalog recommendation shipping; do
  kubectl label namespace $ns istio.io/rev=$REVISION --overwrite
done;

kubectl apply -f asmoutput/samples/online-boutique/kubernetes-manifests/deployments

kubectl apply -f asmoutput/samples/online-boutique/kubernetes-manifests/services

kubectl apply -f asmoutput/samples/online-boutique/istio-manifests/allow-egress-googleapis.yaml

kubectl apply -f asmoutput/samples/online-boutique/istio-manifests/frontend-gateway.yaml

kubectl get service "istio-ingressgateway" -n $FRONTEND_GATEWAY_NAMESPACE


./orderservice/deploy.sh