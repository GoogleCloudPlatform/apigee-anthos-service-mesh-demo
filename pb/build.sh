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

echo "Generating pb file from proto ..."
protoc -I${GOOGLEAPIS_DIR} -I. \
       --include_imports \
       --include_source_info \
       --descriptor_set_out=../kubernetes-manifests/config/proto.pb \
       ./hipstershop.proto



