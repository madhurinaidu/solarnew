// CRUD
import { Injectable } from '@nestjs/common';
import { Plant_alertsRepository } from '../repositories/Plant_alertsRepository';
import { IPlant_alerts } from '../models/Plant_alerts';

@Injectable()
class Plant_alertsService {
    constructor(private readonly Plant_alertsRepository: Plant_alertsRepository) {}
    async createPlant_alerts(data: any) {
        return this.Plant_alertsRepository.create(data);
    }

    async getPlant_alerts() {
        return await this.Plant_alertsRepository.findAll();
    }

    async getPlant_alertsById(id: string) {
        return await this.Plant_alertsRepository.findById(id);
    }

    async updatePlant_alerts(id: string, updatedData: Partial<IPlant_alerts>) {
        return await this.Plant_alertsRepository.updateById(id, updatedData);
    }

    async deletePlant_alerts(id: string) {
        return await this.Plant_alertsRepository.deleteById(id);
    }
}

export { Plant_alertsService };
