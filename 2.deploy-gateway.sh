#!/bin/bash

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

