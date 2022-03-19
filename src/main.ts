import { NestFactory } from '@nestjs/core';
import { WebAppModule } from './server/webapp/module';

async function bootstrap() {
  const app = await NestFactory.create(WebAppModule);
  await app.listen(3000);
}
bootstrap();
