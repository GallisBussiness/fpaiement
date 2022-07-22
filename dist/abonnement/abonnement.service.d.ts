import { Model } from 'mongoose';
import { CreateAbonnementDto } from './dto/create-abonnement.dto';
import { UpdateAbonnementDto } from './dto/update-abonnement.dto';
import { Abonnement, AbonnementDocument } from './entities/abonnement.entity';
export declare class AbonnementService {
    private abonnementModel;
    constructor(abonnementModel: Model<AbonnementDocument>);
    create(createAbonnementDto: CreateAbonnementDto): Promise<{
        data: Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        status: number;
    }>;
    findAll(): Promise<{
        data: (Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        status: number;
    }>;
    findOne(id: string): Promise<{
        data: Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        status: number;
    }>;
    update(id: string, updateAbonnementDto: UpdateAbonnementDto): Promise<{
        data: Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        status: number;
    }>;
    remove(id: string): Promise<{
        data: Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        status: number;
    }>;
}
