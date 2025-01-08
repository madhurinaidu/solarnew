// CRUD
import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { Plant_alertsService } from '../services/Plant_alertsService';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/Plant_alerts')
@UseGuards(AuthGuard)
export class Plant_alertsController {

    constructor(private readonly Plant_alertsService: Plant_alertsService) {}

    @Post()
    async createPlant_alerts(@Body() Plant_alertsData: any) {
      return this.Plant_alertsService.createPlant_alerts(Plant_alertsData);
    }

    @Get()
    async getPlant_alerts(@Body() Plant_alertsData: any) {
      return this.Plant_alertsService.getPlant_alerts();
    }

    @Get(':id')
    async getPlant_alertsById(@Param('id') id: string) {
      return this.Plant_alertsService.getPlant_alertsById(id);
    }

    @Put(':id')
    async updatePlant_alerts(@Param('id') id: string,@Body() updatedData: any) {
      return this.Plant_alertsService.updatePlant_alerts(id,updatedData);
    }

    @Delete(':id')
    async deletePlant_alerts(@Param('id') id: string) {
      return this.Plant_alertsService.deletePlant_alerts(id);
    }
}

