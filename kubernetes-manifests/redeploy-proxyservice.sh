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