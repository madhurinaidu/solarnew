// CRUD
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IReports } from '../models/Reports';

@Injectable()
class ReportsRepository {
    constructor(@InjectModel('Reports') private ReportsModel: Model<IReports>) {}

    async create(data: Partial<IReports>) {
        const newRecord = new this.ReportsModel(data);
        return await newRecord.save();
    }

    async findAll() {
        return await this.ReportsModel.find();
    }

    async findById(id: string) {
        return await this.ReportsModel.findById(id);
    }

    async updateById(id: string, updatedData: Partial<IReports>) {
        return await this.ReportsModel.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async deleteById(id: string) {
        return await this.ReportsModel.findByIdAndDelete(id);
    }
}

export { ReportsRepository };
