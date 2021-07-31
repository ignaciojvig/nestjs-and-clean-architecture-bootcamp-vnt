import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = (nestApp: INestApplication, logger: Logger) => {
  const config = new DocumentBuilder()
    .setTitle('Series API')
    .setDescription('The Series API Documentation')
    .setVersion('1.0')
    .build();

  const swaggerPath = '/api-doc';

  const swaggerDocument = SwaggerModule.createDocument(nestApp, config);
  SwaggerModule.setup(swaggerPath, nestApp, swaggerDocument);

  logger.log(
    `Nest application OpenAPI Swagger UI on: ${swaggerPath}`,
    'Swagger',
  );
};
