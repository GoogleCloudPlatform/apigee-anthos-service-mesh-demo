
cd portal/client && npm cache clean --force && npm install && npm run build

cd ../..

cp -rf portal/client/dist/. portal/service/public

cd portal/service && npm install && npm run build
