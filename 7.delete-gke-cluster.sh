#!/bin/bash

set -e

if [ -z "$PROJECT" ]
then
echo "No PROJECT variable set"
exit
fi

if [ -z "$NETWORK" ]
then
echo "No NETWORK variable set"
exit
fi

if [ -z "$SUBNETWORK" ]
then
echo "No SUBNETWORK variable set"
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

echo "Enabling APIs..."
gcloud services enable compute.googleapis.com
gcloud services enable container.googleapis.com

echo "Creating cluster..."
gcloud container clusters delete $CLUSTERNAME \
    --project=$PROJECT \
    --zone=$LOCATION \
    --network=$NETWORK \
    --subnetwork=$SUBNETWORK