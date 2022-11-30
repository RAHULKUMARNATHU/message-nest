import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessegesModule } from './messages/messeges.module';


async function bootstrap() {
  const app = await NestFactory.create(MessegesModule);
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
