import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbonnementService } from './abonnement.service';
import { AbonnementController } from './abonnement.controller';
import { Abonnement, AbonnementSchema } from './entities/abonnement.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Abonnement.name, schema: AbonnementSchema },
    ]),
  ],
  controllers: [AbonnementController],
  providers: [AbonnementService],
})
export class AbonnementModule {}
