// CRUD
import { Injectable } from '@nestjs/common';
import { PlantsRepository } from '../repositories/PlantsRepository';
import { IPlants } from '../models/Plants';

@Injectable()
class PlantsService {
    constructor(private readonly PlantsRepository: PlantsRepository) {}
    async createPlants(data: any) {
        return this.PlantsRepository.create(data);
    }

    async getPlants() {
        return await this.PlantsRepository.findAll();
    }

    async getPlantsById(id: string) {
        return await this.PlantsRepository.findById(id);
    }

    async updatePlants(id: string, updatedData: Partial<IPlants>) {
        return await this.PlantsRepository.updateById(id, updatedData);
    }

    async deletePlants(id: string) {
        return await this.PlantsRepository.deleteById(id);
    }
}

export { PlantsService };
