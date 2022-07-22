import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AbonnementService } from './abonnement.service';
import { CreateAbonnementDto } from './dto/create-abonnement.dto';
import { UpdateAbonnementDto } from './dto/update-abonnement.dto';

@Controller()
export class AbonnementController {
  constructor(private readonly abonnementService: AbonnementService) {}

  @MessagePattern('createAbonnement')
  create(@Payload() createAbonnementDto: CreateAbonnementDto) {
    return this.abonnementService.create(createAbonnementDto);
  }

  @MessagePattern('findAllAbonnement')
  findAll() {
    return this.abonnementService.findAll();
  }

  @MessagePattern('findOneAbonnement')
  findOne(@Payload() id: string) {
    return this.abonnementService.findOne(id);
  }

  @MessagePattern('updateAbonnement')
  update(@Payload() updateAbonnementDto: UpdateAbonnementDto) {
    return this.abonnementService.update(
      updateAbonnementDto.id,
      updateAbonnementDto,
    );
  }

  @MessagePattern('removeAbonnement')
  remove(@Payload() id: string) {
    return this.abonnementService.remove(id);
  }

  @Cron(CronExpression.EVERY_DAY_AT_10AM)
  async handleCron() {
    const { data: abonnements } = await this.abonnementService.findAll();
    abonnements?.forEach(async (a) => {
      if (a.duree > 0) {
        a.duree -= 1;
        await a.save();
      } else {
        a.isActive = false;
        await a.save();
      }
    });
  }
}
