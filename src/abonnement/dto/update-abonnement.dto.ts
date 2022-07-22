import { PartialType } from '@nestjs/mapped-types';
import { CreateAbonnementDto } from './create-abonnement.dto';
import { IsMongoId } from 'class-validator';

export class UpdateAbonnementDto extends PartialType(CreateAbonnementDto) {
  @IsMongoId()
  id: string;
}
