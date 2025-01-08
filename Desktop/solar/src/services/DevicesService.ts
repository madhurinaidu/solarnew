// CRUD
import { Injectable } from '@nestjs/common';
import { DevicesRepository } from '../repositories/DevicesRepository';
import { IDevices } from '../models/Devices';

@Injectable()
class DevicesService {
    constructor(private readonly DevicesRepository: DevicesRepository) {}
    async createDevices(data: any) {
        return this.DevicesRepository.create(data);
    }

    async getDevices() {
        return await this.DevicesRepository.findAll();
    }

    async getDevicesById(id: string) {
        return await this.DevicesRepository.findById(id);
    }

    async updateDevices(id: string, updatedData: Partial<IDevices>) {
        return await this.DevicesRepository.updateById(id, updatedData);
    }

    async deleteDevices(id: string) {
        return await this.DevicesRepository.deleteById(id);
    }
}

export { DevicesService };
