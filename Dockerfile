ARG DENO_VERSION=latest

FROM hayd/alpine-deno:${DENO_VERSION} as builder

WORKDIR /app

COPY . .

RUN deno cache --unstable src/main.ts

RUN deno compile --unstable -A --output deno_rest --target x86_64-unknown-linux-gnu src/main.ts


FROM alpine

WORKDIR /root/

COPY --from=builder /app/deno_rest /usr/local/bin/

CMD ["deno_rest"]
