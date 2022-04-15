#!/usr/bin/env bash

set -e

echo "Copying proto files from pb directory ..."
rm -rf ./proto/*
cp -r ../pb/googleapis ./proto/googleapis
cp ../pb/hipstershop.proto ./proto/hipstershop.proto

echo "Installing npm dependencies ..."
npm i

echo "Building service binary ..."
npm run build