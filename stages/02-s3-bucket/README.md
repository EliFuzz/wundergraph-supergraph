# S3 Bucket for Supergraph Schema

The S3 bucket is used to store the supergraph schema, allowing for easy access and management of the schema files.

# 📋 Architecture Overview

## System Components

- **Subgraphs**: Modular GraphQL services (e.g., marketing, sales)
- **Router**: Supergraph router for federated queries
- **S3 Bucket**: Storage for the supergraph schema

## Architecture Diagram

```mermaid
flowchart TD
    subgraph cicd[CI/CD]
        cli(CLI)
    end

    subgraph os[OS]
        s3[(S3 Bucket)]
    end

    cli a0@-->|push supergraph schema| s3

    user(User) a1@-->|query| router[[Router]]
    router a2@--> marketing(Marketing Subgraph)
    router a3@--> sales(Sales Subgraph)

    router a4@-->|poll latest supergraph schema| s3

    a0@{ animate: true }
    a1@{ animate: true }
    a2@{ animate: true }
    a3@{ animate: true }
    a4@{ animate: true }
```
