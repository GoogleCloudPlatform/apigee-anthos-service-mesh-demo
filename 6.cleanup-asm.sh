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

if [ -z "$GATEWAY_NAMESPACE" ]
then
echo "No GATEWAY_NAMESPACE variable set"
exit
fi

gcloud container clusters get-credentials $CLUSTERNAME \
--project=$PROJECT \
--zone=$LOCATION

kubectl config set-context $CLUSTERNAME

echo "Deleting Online Boutique sample application..."
kubectl delete -f \
    asmoutput/samples/online-boutique/istio-manifests/frontend-gateway.yaml

kubectl delete -f \
 asmoutput/samples/online-boutique/istio-manifests/allow-egress-googleapis.yaml

kubectl delete -f \
 asmoutput/samples/online-boutique/kubernetes-manifests/services

kubectl delete -f \
 asmoutput/samples/online-boutique/kubernetes-manifests/deployments

kubectl delete -f \
  asmoutput/samples/online-boutique/kubernetes-manifests/namespaces

echo "Deleting ASM Gateway..."
kubectl delete -n $GATEWAY_NAMESPACE \
  -f asmoutput/samples/gateways/istio-ingressgateway

kubectl delete namespace $GATEWAY_NAMESPACE

./orderservice/cleanup.sh