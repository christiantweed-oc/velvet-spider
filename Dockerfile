FROM node:20-bullseye-slim as base

WORKDIR /app
RUN apt-get update -y && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*
COPY package* /app/
EXPOSE 3000

ARG ANGULAR_CLI_VERSION=18

FROM base as builder
RUN npm install -g "@angular/cli@$ANGULAR_CLI_VERSION" && npm ci

COPY . /app

FROM builder as local_dev
ENV NODE_ENV=development
RUN apt-get update -y && \
    apt-get install -y procps
RUN npm install && \
    npm cache clean --force

#TODO: Figure out how to run the server in the docker container