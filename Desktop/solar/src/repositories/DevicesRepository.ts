// CRUD
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDevices } from '../models/Devices';

@Injectable()
class DevicesRepository {
    constructor(@InjectModel('Devices') private DevicesModel: Model<IDevices>) {}

    async create(data: Partial<IDevices>) {
        const newRecord = new this.DevicesModel(data);
        return await newRecord.save();
    }

    async findAll() {
        return await this.DevicesModel.find();
    }

    async findById(id: string) {
        return await this.DevicesModel.findById(id);
    }

    async updateById(id: string, updatedData: Partial<IDevices>) {
        return await this.DevicesModel.findByIdAndUpdate(id, updatedData, { new: true });
    }

    async deleteById(id: string) {
        return await this.DevicesModel.findByIdAndDelete(id);
    }
}

export { DevicesRepository };
