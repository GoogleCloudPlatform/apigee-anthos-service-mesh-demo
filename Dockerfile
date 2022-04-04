FROM node:14

WORKDIR /usr/src/app

COPY service/package*.json ./

RUN npm install

COPY portal/service .
RUN npm run build
#COPY client/build ./public

COPY portal/client ./client
RUN cd client && npm cache clean --force && npm install && npm run build
RUN cp -rf client/dist/. ./public/

EXPOSE 8080

CMD [ "node", "dist" ]