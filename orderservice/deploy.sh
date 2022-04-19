#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
set -e && pushd "${SCRIPT_DIR}"

echo "Deploying orderservice ..."
echo "Creating orders namespace"
kubectl create namespace orders

ASM_VERSION=$(kubectl get deploy -n istio-system -l app=istiod -o jsonpath={.items[*].metadata.labels.'istio\.io\/rev'}'{"\n"}')
kubectl label namespace orders istio.io/rev=$ASM_VERSION --overwrite

echo "Deploying orders service application code"
kubectl apply -n orders -f ./kubernetes-manifests/orderservice-staging.yaml
kubectl wait pod -n orders orderservice-staging --for condition=Ready=True --timeout=60s
kubectl cp -n orders ./dist/Linux/orderservice orderservice-staging:/data/
kubectl exec -it -n orders orderservice-staging -- bash -c "touch /data/ready"
kubectl delete -n orders pod orderservice-staging

echo "Deploying orders service"
kubectl apply -n orders -f ./kubernetes-manifests/orderservice.yaml

set +e && popd