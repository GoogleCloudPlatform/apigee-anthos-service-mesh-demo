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

echo "Deleting Ingress Gateway for the APIs "
kubectl delete -f kubernetes-manifests/api-ingressgateway/. -n $API_GATEWAY_NAMESPACE

echo "Deleting configmap for the proxyservice"
kubectl delete configmap proxyconfig -n $API_GATEWAY_NAMESPACE

echo "Deleting namespace"
kubectl delete namespace $API_GATEWAY_NAMESPACE
