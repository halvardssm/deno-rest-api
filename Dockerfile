ARG DENO_VERSION=latest

FROM hayd/alpine-deno:${DENO_VERSION} as builder

RUN apk add make

WORKDIR /app

COPY . .

RUN deno cache --unstable main.ts

ENTRYPOINT [ "make", "run" ]
