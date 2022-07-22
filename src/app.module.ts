import { Module } from '@nestjs/common';
import { AbonnementModule } from './abonnement/abonnement.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    AbonnementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
