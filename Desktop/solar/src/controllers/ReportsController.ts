// CRUD
import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { ReportsService } from '../services/ReportsService';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/Reports')
@UseGuards(AuthGuard)
export class ReportsController {

    constructor(private readonly ReportsService: ReportsService) {}

    @Post()
    async createReports(@Body() ReportsData: any) {
      return this.ReportsService.createReports(ReportsData);
    }

    @Get()
    async getReports(@Body() ReportsData: any) {
      return this.ReportsService.getReports();
    }

    @Get(':id')
    async getReportsById(@Param('id') id: string) {
      return this.ReportsService.getReportsById(id);
    }

    @Put(':id')
    async updateReports(@Param('id') id: string,@Body() updatedData: any) {
      return this.ReportsService.updateReports(id,updatedData);
    }

    @Delete(':id')
    async deleteReports(@Param('id') id: string) {
      return this.ReportsService.deleteReports(id);
    }
}

