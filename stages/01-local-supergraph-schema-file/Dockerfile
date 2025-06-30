FROM ghcr.io/wundergraph/cosmo/router:latest

COPY ./router/config.yml config.yml
COPY ./storage/router.json router.json

EXPOSE 3002

ENTRYPOINT ["/router", "--config", "config.yml"]
