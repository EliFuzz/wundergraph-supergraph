.PHONY: up
up: install-deps-sales install-deps-marketing sales marketing supergraph router

.PHONY: down
down: docker-down

.PHONY: sales
sales:
	pnpm --prefix ../../subgraphs/sales run schema

.PHONY: marketing
marketing:
	pnpm --prefix ../../subgraphs/marketing run schema

.PHONY: supergraph
supergraph:
	npx wgc router compose -i ../../router/config/router.yml -o ./s3/router.json

.PHONY: router
router: docker-down docker-up

docker-down:
	docker-compose down --rmi all --volumes --remove-orphans

docker-up:
	docker-compose up --build

install-deps-%:
	if [ ! -d ../../subgraphs/$*/node_modules ]; then cd ../../subgraphs/$* && pnpm i; fi
