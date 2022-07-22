import { Pack } from 'src/pack/entities/pack.entity';
export declare class CreateAbonnementDto {
    doctorId: string;
    duree: number;
    isActive: boolean;
    price: number;
    pack: Pack;
}
