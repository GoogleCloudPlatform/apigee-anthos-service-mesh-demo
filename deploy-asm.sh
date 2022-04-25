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

gcloud services enable cloudtrace.googleapis.com

gcloud container clusters get-credentials $CLUSTERNAME --project=$PROJECT --zone=$LOCATION
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
  --option cloud-tracing \
  --enable_all \
  --ca mesh_ca

sleep 10s

export REVISION=$(kubectl get deploy -n istio-system -l app=istiod -o jsonpath={.items[*].metadata.labels.'istio\.io\/rev'}'{"\n"}')

echo "Deploying Online Boutique sample application..."
kubectl apply -f asmoutput/samples/online-boutique/kubernetes-manifests/namespaces

for ns in ad cart checkout currency email frontend loadgenerator payment product-catalog recommendation shipping; do
  kubectl label namespace $ns istio.io/rev=$REVISION --overwrite
done;

kubectl apply -f asmoutput/samples/online-boutique/kubernetes-manifests/deployments
kubectl apply -f asmoutput/samples/online-boutique/kubernetes-manifests/services
kubectl apply -f asmoutput/samples/online-boutique/istio-manifests/allow-egress-googleapis.yaml

./orderservice/deploy.sh
./ui-ingress/deploy.sh