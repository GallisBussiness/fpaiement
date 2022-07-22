import { IsMongoId, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { Pack } from 'src/pack/entities/pack.entity';
export class CreateAbonnementDto {
  @IsMongoId()
  doctorId: string;

  @IsNumber()
  duree: number;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  price: number;

  pack: Pack;
}
