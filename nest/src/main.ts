import "dotenv/config"
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT
  await app.listen(port, ()=>{
    console.log(`server berjalan di port ${port}`)
  });
}
bootstrap();