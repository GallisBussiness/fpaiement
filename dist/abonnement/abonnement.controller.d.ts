import { AbonnementService } from './abonnement.service';
import { CreateAbonnementDto } from './dto/create-abonnement.dto';
import { UpdateAbonnementDto } from './dto/update-abonnement.dto';
export declare class AbonnementController {
    private readonly abonnementService;
    constructor(abonnementService: AbonnementService);
    create(createAbonnementDto: CreateAbonnementDto): Promise<{
        data: import("./entities/abonnement.entity").Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        status: number;
    }>;
    findAll(): Promise<{
        data: (import("./entities/abonnement.entity").Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        status: number;
    }>;
    findOne(id: string): Promise<{
        data: import("./entities/abonnement.entity").Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        status: number;
    }>;
    update(updateAbonnementDto: UpdateAbonnementDto): Promise<{
        data: import("./entities/abonnement.entity").Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        status: number;
    }>;
    remove(id: string): Promise<{
        data: import("./entities/abonnement.entity").Abonnement & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        status: number;
    }>;
    handleCron(): Promise<void>;
}
