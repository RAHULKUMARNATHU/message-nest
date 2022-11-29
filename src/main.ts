import { NestFactory } from '@nestjs/core';
import { MessegesModule } from './messeges/messeges.module';


async function bootstrap() {
  const app = await NestFactory.create(MessegesModule);
  await app.listen(3000);
}
bootstrap();
