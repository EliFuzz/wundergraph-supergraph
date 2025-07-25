# Local Supergraph Schema File

This is a local supergraph schema file for WunderGraph Cosmo Router.

# 📋 Architecture Overview

## System Components

- **Subgraphs**: Modular GraphQL services (e.g., marketing, sales)
- **Router**: Supergraph router for federated queries

## Architecture Diagram

```mermaid
flowchart TD

    subgraph cicd[CI/CD]
        cli[CLI]
    end

    user(User) a1@--->|query| router[[Router]]
    router a2@--> marketing(Marketing Subgraph)
    router a3@--> sales(Sales Subgraph)
    cli a4@-->|deploy supergraph schema| router

    a1@{ animate: true }
    a2@{ animate: true }
    a3@{ animate: true }
    a4@{ animate: true }
```
