#!/usr/bin/env bash

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



