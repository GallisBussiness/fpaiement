import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const PORT = parseInt(process.env.PORT, 10);
const options: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'https://fpaiement-production.up.railway.app',
    port: PORT,
  },
};
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, options);
  app
    .listen()
    .then(() => logger.log(`Paiement Microservice started in port: ${PORT}`));
}
bootstrap();
