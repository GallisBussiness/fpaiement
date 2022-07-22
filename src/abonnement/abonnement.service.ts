import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAbonnementDto } from './dto/create-abonnement.dto';
import { UpdateAbonnementDto } from './dto/update-abonnement.dto';
import { Abonnement, AbonnementDocument } from './entities/abonnement.entity';

@Injectable()
export class AbonnementService {
  constructor(
    @InjectModel(Abonnement.name)
    private abonnementModel: Model<AbonnementDocument>,
  ) {}
  async create(createAbonnementDto: CreateAbonnementDto) {
    try {
      const doc = await this.abonnementModel.create(createAbonnementDto);
      doc.duree = doc.duree * 30;
      return { data: await doc.save(), status: 200 };
    } catch (error) {
      throw new RpcException({
        message: error.message,
        statusCode: 500,
      });
    }
  }

  async findAll() {
    try {
      return { data: await this.abonnementModel.find(), status: 200 };
    } catch (error) {
      throw new RpcException({
        message: error.message,
        statusCode: 500,
      });
    }
  }

  async findOne(id: string) {
    try {
      return { data: await this.abonnementModel.findById(id), status: 200 };
    } catch (error) {
      throw new RpcException({
        message: error.message,
        statusCode: 500,
      });
    }
  }

  async update(id: string, updateAbonnementDto: UpdateAbonnementDto) {
    try {
      return {
        data: await this.abonnementModel.findByIdAndUpdate(
          id,
          updateAbonnementDto,
        ),
        status: 200,
      };
    } catch (error) {
      throw new RpcException({
        message: error.message,
        statusCode: 500,
      });
    }
  }

  async remove(id: string) {
    try {
      return {
        data: await this.abonnementModel.findByIdAndDelete(id),
        status: 200,
      };
    } catch (error) {
      throw new RpcException({
        message: error.message,
        statusCode: 500,
      });
    }
  }
}
