import { NestFactory } from "@nestjs/core";
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from "@nestjs/graphql";
import { mkdirSync, writeFileSync } from "fs";
import { printSchema } from "graphql";
import { join } from "path";
import * as resolvers from "./resolvers";

const sdl = async () => {
  // init
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  // generate schema
  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create(Object.values(resolvers), []);

  // persist schema
  const schemaDir = join(__dirname, "../../schema");
  mkdirSync(schemaDir, { recursive: true });
  writeFileSync(join(schemaDir, "schema.graphql"), printSchema(schema));
};

sdl().catch(console.error);
