/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
import { Pack } from 'src/pack/entities/pack.entity';
export declare type AbonnementDocument = Abonnement & Document;
export declare class Abonnement {
    doctorId: string;
    duree: number;
    price: number;
    isActive: boolean;
    pack: Pack;
}
export declare const AbonnementSchema: import("mongoose").Schema<Document<Abonnement, any, any>, import("mongoose").Model<Document<Abonnement, any, any>, any, any, any>, {}, {}>;
