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



gcloud container clusters get-credentials $CLUSTERNAME --project=$PROJECT  --zone=$LOCATION

kubectl config set-context $CLUSTERNAME

echo "Deleting Online Boutique sample application..."
kubectl delete -f asmoutput/samples/online-boutique/istio-manifests/allow-egress-googleapis.yaml

kubectl delete -f asmoutput/samples/online-boutique/kubernetes-manifests/services

kubectl delete -f asmoutput/samples/online-boutique/kubernetes-manifests/deployments

kubectl delete -f asmoutput/samples/online-boutique/kubernetes-manifests/namespaces

echo "Deleting ASM Gateway..."
./ui-ingress/cleanup.sh
./orderservice/cleanup.sh