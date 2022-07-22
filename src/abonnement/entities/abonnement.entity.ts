import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Pack } from 'src/pack/entities/pack.entity';

export type AbonnementDocument = Abonnement & Document;

@Schema({ timestamps: true, versionKey: false })
export class Abonnement {
  @Prop({ type: Types.ObjectId, required: true })
  doctorId: string;

  @Prop({ type: Number, required: true })
  duree: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Boolean, required: true, default: false })
  isActive: boolean;

  @Prop({ type: Pack, required: true })
  pack: Pack;
}

export const AbonnementSchema = SchemaFactory.createForClass(Abonnement);
