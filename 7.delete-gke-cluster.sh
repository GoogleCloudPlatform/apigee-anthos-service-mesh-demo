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


echo "Deleting cluster..."
gcloud container clusters delete $CLUSTERNAME \
    --project=$PROJECT \
    --zone=$LOCATION --quiet