import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { setupSwagger } from 'src/environment/swagger/swagger.configuration';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  setupSwagger(app, logger);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
