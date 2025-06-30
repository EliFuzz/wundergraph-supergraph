# wundergraph-supergraph

Wundergraph Supergraph Router setup

# 🚀 Onboarding Guide

## Prerequisites

- Node.js (v22+ recommended)
- pnpm
- Docker & Docker Compose

## Setup Steps

1. Clone the repository
2. Install dependencies: `pnpm i`
3. Start services: `make up`
4. Navigate to [http://localhost:4000](http://localhost:4000) to access the supergraph playground

## Key Technologies

- Node.js, NestJS (subgraphs)
- GraphQL Federation
- Docker Compose (local dev)

## Extensibility

- Add new subgraphs for additional domains
- Update router config for new services

# Visualizations

## Query Plan

![](docs/img/query-plan.png)

## Request Trace: Tree View

![](docs/img/request-trace-tree-view.png)

## Request Trace: Waterfall View

![](docs/img/request-trace-waterfall-view.png)
