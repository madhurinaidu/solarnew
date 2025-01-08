// CRUD
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPlant_migrations } from '../models/Plant_migrations';

@Injectable()
class Plant_migrationsRepository {
    constructor(@InjectModel('Plant_migrations') private Plant_migrationsModel: Model<IPlant_migrations>) {}

    async create(data: Partial<IPlant_migrations>) {
        const newRecord = new this.Plant_migrationsModel(data);
        return await newRecord.save();
    }

    async findAll() {
        return await this.Plant_migrationsModel.find();
    }

    async findById(id: string) {
        return await this.Plant_migrationsModel.findById(id);
    }

    async updateById(id: string, updatedData: Partial<IPlant_migrations>) {
        return await this.Plant_migrationsModel.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async deleteById(id: string) {
        return await this.Plant_migrationsModel.findByIdAndDelete(id);
    }
}

export { Plant_migrationsRepository };
