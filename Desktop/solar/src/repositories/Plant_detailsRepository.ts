// CRUD
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPlant_details } from '../models/Plant_details';

@Injectable()
class Plant_detailsRepository {
    constructor(@InjectModel('Plant_details') private Plant_detailsModel: Model<IPlant_details>) {}

    async create(data: Partial<IPlant_details>) {
        const newRecord = new this.Plant_detailsModel(data);
        return await newRecord.save();
    }

    async findAll() {
        return await this.Plant_detailsModel.find();
    }

    async findById(id: string) {
        return await this.Plant_detailsModel.findById(id);
    }

    async updateById(id: string, updatedData: Partial<IPlant_details>) {
        return await this.Plant_detailsModel.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async deleteById(id: string) {
        return await this.Plant_detailsModel.findByIdAndDelete(id);
    }
}

export { Plant_detailsRepository };
