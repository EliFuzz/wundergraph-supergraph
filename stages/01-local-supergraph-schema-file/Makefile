.PHONY: up
up: sales marketing supergraph router

.PHONY: down
down: docker-down

.PHONY: sales
sales:
	pnpm --filter ./subgraphs/sales run schema

.PHONY: marketing
marketing:
	pnpm --filter ./subgraphs/marketing run schema

.PHONY: supergraph
supergraph:
	npx wgc router compose -i ./router/config/router.yml -o ./router/router.json

.PHONY: router
router: docker-down docker-up

docker-down:
	docker-compose down --rmi all --volumes --remove-orphans

docker-up:
	docker-compose up --build
