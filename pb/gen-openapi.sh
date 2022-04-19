#!/usr/bin/env bash

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
export GOOGLEAPIS_DIR=./googleapis

if [ ! -d "${GOOGLEAPIS_DIR}" ] ; then
    echo "Google APIs directory is missing, will download form Github ..."
    curl -sfL https://github.com/googleapis/googleapis/archive/refs/heads/master.zip -o master.zip
    unzip -q master.zip
    mv googleapis-master/ ${GOOGLEAPIS_DIR}
    rm -f master.zip
fi

echo "Generating openapi.yaml file from proto ..."
go install github.com/google/gnostic/cmd/protoc-gen-openapi@latest

protoc -I${GOOGLEAPIS_DIR} -I. \
       --openapi_out=../specs/gen \
       ./hipstershop.proto



