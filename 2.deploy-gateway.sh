#!/bin/bash

if [ -z "$PROJECT" ]
then
echo "No PROJECT variable set, trying to use gcloud current project..."
export PROJECT=$(gcloud config get-value project)
echo "PROJECT set to $PROJECT"
fi

if [ -z "$LOCATION" ]
then
echo "No LOCATION variable set, using europe-west1..."
export LOCATION="europe-west1-c"
fi

if [ -z "$CLUSTERNAME" ]
then
echo "No CLUSTERNAME variable set, using 'asm-cluster'"
export CLUSTERNAME="asm-cluster"
fi

if [ -z "$GATEWAY_NAMESPACE" ]
then
echo "No GATEWAY_NAMESPACE variable set, using 'istio-gateway'"
export GATEWAY_NAMESPACE="istio-gateway"
fi

echo "Enabling APIs..."
gcloud services enable compute.googleapis.com

gcloud container clusters get-credentials $CLUSTERNAME \
--project=$PROJECT \
--zone=$LOCATION

kubectl config set-context $CLUSTERNAME

echo "Create configmap for the proxyservice"
kubectl create configmap proxyconfig --from-file=kubernetes-manifests/config -n $GATEWAY_NAMESPACE

echo "Deploy the istio gateway and proxyservice"
kubectl apply -f kubernetes-manifests/istio-gateway.yaml -n $GATEWAY_NAMESPACE
kubectl apply -f kubernetes-manifests/proxy-service.yaml -n $GATEWAY_NAMESPACE

