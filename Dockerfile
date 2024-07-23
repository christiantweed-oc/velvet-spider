FROM node:22 as base

WORKDIR /app
RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get install -y procps && \
    apt-get install python3 -y && \
    rm -rf /var/lib/apt/lists/*
COPY package* /app/
EXPOSE 3000

ARG ANGULAR_CLI_VERSION=18

FROM base as builder
RUN npm install -g "@angular/cli@$ANGULAR_CLI_VERSION"

COPY . /app

FROM builder as local_dev
ENV NODE_ENV=development
RUN npm ci --include=optional && \
    npm cache clean --force

