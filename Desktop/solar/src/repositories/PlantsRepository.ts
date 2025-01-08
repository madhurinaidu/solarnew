// CRUD
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPlants } from '../models/Plants';

@Injectable()
class PlantsRepository {
    constructor(@InjectModel('Plants') private PlantsModel: Model<IPlants>) {}

    async create(data: Partial<IPlants>) {
        const newRecord = new this.PlantsModel(data);
        return await newRecord.save();
    }

    async findAll() {
        return await this.PlantsModel.find();
    }

    async findById(id: string) {
        return await this.PlantsModel.findById(id);
    }

    async updateById(id: string, updatedData: Partial<IPlants>) {
        return await this.PlantsModel.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async deleteById(id: string) {
        return await this.PlantsModel.findByIdAndDelete(id);
    }
}

export { PlantsRepository };
