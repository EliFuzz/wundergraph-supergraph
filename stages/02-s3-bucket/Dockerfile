FROM ghcr.io/wundergraph/cosmo/router:latest

COPY ./router/config.yml config.yml

EXPOSE 3002

ENTRYPOINT ["/router", "--config", "config.yml"]
