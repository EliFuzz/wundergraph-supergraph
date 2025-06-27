import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { HealthModule } from "./health/health.module";
import { MarketingModule } from "./marketing/marketing.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: [__dirname + "/../gql/**/*.graphql"],
      definitions: {
        path: join(process.cwd(), "src/graphql.schema.ts"),
        outputAs: "class",
      },
      playground: true,
      introspection: true,
    }),
    MarketingModule,
    HealthModule,
  ],
})
export class AppModule {}
