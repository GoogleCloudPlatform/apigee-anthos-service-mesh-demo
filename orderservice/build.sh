#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
set -e && pushd "${SCRIPT_DIR}"

echo "Copying proto files from pb directory ..."
rm -rf ./proto/*
cp -r ../pb/googleapis ./proto/googleapis
cp ../pb/hipstershop.proto ./proto/hipstershop.proto

echo "Installing npm dependencies ..."
npm i

echo "Building service binary ..."
npm run build

set +e && popd