// CRUD
import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { PlantsService } from '../services/PlantsService';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/Plants')
@UseGuards(AuthGuard)
export class PlantsController {

    constructor(private readonly PlantsService: PlantsService) {}

    @Post()
    async createPlants(@Body() PlantsData: any) {
      return this.PlantsService.createPlants(PlantsData);
    }

    @Get()
    async getPlants(@Body() PlantsData: any) {
      return this.PlantsService.getPlants();
    }

    @Get(':id')
    async getPlantsById(@Param('id') id: string) {
      return this.PlantsService.getPlantsById(id);
    }

    @Put(':id')
    async updatePlants(@Param('id') id: string,@Body() updatedData: any) {
      return this.PlantsService.updatePlants(id,updatedData);
    }

    @Delete(':id')
    async deletePlants(@Param('id') id: string) {
      return this.PlantsService.deletePlants(id);
    }
}

