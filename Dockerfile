ARG DENO_VERSION=latest

FROM hayd/alpine-deno:${DENO_VERSION} as builder

WORKDIR /app

COPY . .

RUN deno cache --unstable main.ts

CMD [ "make", "run" ]
