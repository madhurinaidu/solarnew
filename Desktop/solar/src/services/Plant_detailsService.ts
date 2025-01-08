// CRUD
import { Injectable } from '@nestjs/common';
import { Plant_detailsRepository } from '../repositories/Plant_detailsRepository';
import { IPlant_details } from '../models/Plant_details';

@Injectable()
class Plant_detailsService {
    constructor(private readonly Plant_detailsRepository: Plant_detailsRepository) {}
    async createPlant_details(data: any) {
        return this.Plant_detailsRepository.create(data);
    }

    async getPlant_details() {
        return await this.Plant_detailsRepository.findAll();
    }

    async getPlant_detailsById(id: string) {
        return await this.Plant_detailsRepository.findById(id);
    }

    async updatePlant_details(id: string, updatedData: Partial<IPlant_details>) {
        return await this.Plant_detailsRepository.updateById(id, updatedData);
    }

    async deletePlant_details(id: string) {
        return await this.Plant_detailsRepository.deleteById(id);
    }
}

export { Plant_detailsService };
