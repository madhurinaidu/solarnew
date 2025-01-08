// CRUD
import { Injectable } from '@nestjs/common';
import { Plant_migrationsRepository } from '../repositories/Plant_migrationsRepository';
import { IPlant_migrations } from '../models/Plant_migrations';

@Injectable()
class Plant_migrationsService {
    constructor(private readonly Plant_migrationsRepository: Plant_migrationsRepository) {}
    async createPlant_migrations(data: any) {
        return this.Plant_migrationsRepository.create(data);
    }

    async getPlant_migrations() {
        return await this.Plant_migrationsRepository.findAll();
    }

    async getPlant_migrationsById(id: string) {
        return await this.Plant_migrationsRepository.findById(id);
    }

    async updatePlant_migrations(id: string, updatedData: Partial<IPlant_migrations>) {
        return await this.Plant_migrationsRepository.updateById(id, updatedData);
    }

    async deletePlant_migrations(id: string) {
        return await this.Plant_migrationsRepository.deleteById(id);
    }
}

export { Plant_migrationsService };
