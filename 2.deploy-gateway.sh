#!/bin/bash

export PROJECT=$(gcloud config get-value project)

echo "Enabling APIs..."
gcloud services enable compute.googleapis.com

echo "Create configmap for the proxyservice"
kubectl create configmap proxyconfig --from-file=kubernetes-manifests/config -n istio-gateway

echo "Deploy the istio gateway and proxyservice"
kubectl apply -f kubernetes-manifests/istio-gateway.yaml -n istio-gateway
kubectl apply -f kubernetes-manifests/proxy-service.yaml -n istio-gateway

