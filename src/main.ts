import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { config } from './api/api';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
