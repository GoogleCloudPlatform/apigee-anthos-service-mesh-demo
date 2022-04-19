#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
set -e && pushd "${SCRIPT_DIR}"

echo "Cleaning up orderservice ..."
kubectl delete -f ./kubernetes-manifests/orderservice.yaml -n orders
kubectl delete namespace orders

set +e && popd