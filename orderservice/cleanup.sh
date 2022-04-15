#!/usr/bin/env bash


echo "Cleaning up orderservice ..."
kubectl delete -f ./kubernetes-manifests/orderservice.yaml -n orders
kubectl delete namespace orders