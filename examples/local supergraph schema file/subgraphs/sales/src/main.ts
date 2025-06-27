import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Accept, Authorization",
  });

  const port = process.env.PORT || 4001;
  await app.listen(port);

  console.log(`Sales subgraph is running on: http://localhost:${port}/graphql`);
}

bootstrap();
