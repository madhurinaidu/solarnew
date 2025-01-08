// CRUD
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPlant_alerts } from '../models/Plant_alerts';

@Injectable()
class Plant_alertsRepository {
    constructor(@InjectModel('Plant_alerts') private Plant_alertsModel: Model<IPlant_alerts>) {}

    async create(data: Partial<IPlant_alerts>) {
        const newRecord = new this.Plant_alertsModel(data);
        return await newRecord.save();
    }

    async findAll() {
        return await this.Plant_alertsModel.find();
    }

    async findById(id: string) {
        return await this.Plant_alertsModel.findById(id);
    }

    async updateById(id: string, updatedData: Partial<IPlant_alerts>) {
        return await this.Plant_alertsModel.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async deleteById(id: string) {
        return await this.Plant_alertsModel.findByIdAndDelete(id);
    }
}

export { Plant_alertsRepository };
