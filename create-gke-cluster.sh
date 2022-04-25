#!/bin/bash

# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

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


echo "Enabling APIs..."
gcloud services enable compute.googleapis.com
gcloud services enable container.googleapis.com
gcloud services enable cloudtrace.googleapis.com

echo "Creating cluster..."
gcloud container clusters create $CLUSTERNAME \
    --project=$PROJECT \
    --zone=$LOCATION \
    --machine-type=e2-standard-4 \
    --num-nodes=3 \
    --workload-pool=$PROJECT.svc.id.goog \
    --network=$NETWORK \
    --subnetwork=$SUBNETWORK

