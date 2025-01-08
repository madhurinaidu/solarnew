// CRUD
import { Injectable } from '@nestjs/common';
import { ReportsRepository } from '../repositories/ReportsRepository';
import { IReports } from '../models/Reports';

@Injectable()
class ReportsService {
    constructor(private readonly ReportsRepository: ReportsRepository) {}
    async createReports(data: any) {
        return this.ReportsRepository.create(data);
    }

    async getReports() {
        return await this.ReportsRepository.findAll();
    }

    async getReportsById(id: string) {
        return await this.ReportsRepository.findById(id);
    }

    async updateReports(id: string, updatedData: Partial<IReports>) {
        return await this.ReportsRepository.updateById(id, updatedData);
    }

    async deleteReports(id: string) {
        return await this.ReportsRepository.deleteById(id);
    }
}

export { ReportsService };
