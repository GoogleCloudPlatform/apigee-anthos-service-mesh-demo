FROM node:14

WORKDIR /usr/src/app

#COPY portal/service/package*.json ./

COPY portal/service .
RUN npm install
RUN npm run build

COPY portal/client ./client
RUN cd client && npm cache clean --force && npm install && npm run build
RUN cp -rf client/dist/. ./public/

EXPOSE 8080

CMD [ "node", "dist" ]