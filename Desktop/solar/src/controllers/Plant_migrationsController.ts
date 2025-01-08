// CRUD
import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { Plant_migrationsService } from '../services/Plant_migrationsService';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/Plant_migrations')
@UseGuards(AuthGuard)
export class Plant_migrationsController {

    constructor(private readonly Plant_migrationsService: Plant_migrationsService) {}

    @Post()
    async createPlant_migrations(@Body() Plant_migrationsData: any) {
      return this.Plant_migrationsService.createPlant_migrations(Plant_migrationsData);
    }

    @Get()
    async getPlant_migrations(@Body() Plant_migrationsData: any) {
      return this.Plant_migrationsService.getPlant_migrations();
    }

    @Get(':id')
    async getPlant_migrationsById(@Param('id') id: string) {
      return this.Plant_migrationsService.getPlant_migrationsById(id);
    }

    @Put(':id')
    async updatePlant_migrations(@Param('id') id: string,@Body() updatedData: any) {
      return this.Plant_migrationsService.updatePlant_migrations(id,updatedData);
    }

    @Delete(':id')
    async deletePlant_migrations(@Param('id') id: string) {
      return this.Plant_migrationsService.deletePlant_migrations(id);
    }
}

