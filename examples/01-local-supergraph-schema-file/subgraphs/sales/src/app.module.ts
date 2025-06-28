import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path/win32";
import { HealthModule } from "./health/health.module";
import { SalesModule } from "./sales/sales.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ["./schema/**/*.graphql"],
      playground: true,
      introspection: true,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), "schema/schema.graphql"),
      },
    }),
    SalesModule,
    HealthModule,
  ],
})
export class AppModule {}
