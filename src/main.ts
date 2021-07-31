import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiExceptionFilter } from '@presentation/Filters/api-exception.filter';
import { setupSwagger } from 'src/environment/swagger/swagger.configuration';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  setupSwagger(app, logger);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ApiExceptionFilter());

  await app.listen(3000);
}
bootstrap();
