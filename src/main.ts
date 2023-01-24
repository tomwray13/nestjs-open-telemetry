// Make sure to import the SDK before any other modules
import { otelSDK } from './tracing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Start SDK before nestjs factory create
  await otelSDK.start();
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();
