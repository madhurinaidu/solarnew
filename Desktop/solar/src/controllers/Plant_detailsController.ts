// CRUD
import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { Plant_detailsService } from '../services/Plant_detailsService';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/Plant_details')
@UseGuards(AuthGuard)
export class Plant_detailsController {

    constructor(private readonly Plant_detailsService: Plant_detailsService) {}

    @Post()
    async createPlant_details(@Body() Plant_detailsData: any) {
      return this.Plant_detailsService.createPlant_details(Plant_detailsData);
    }

    @Get()
    async getPlant_details(@Body() Plant_detailsData: any) {
      return this.Plant_detailsService.getPlant_details();
    }

    @Get(':id')
    async getPlant_detailsById(@Param('id') id: string) {
      return this.Plant_detailsService.getPlant_detailsById(id);
    }

    @Put(':id')
    async updatePlant_details(@Param('id') id: string,@Body() updatedData: any) {
      return this.Plant_detailsService.updatePlant_details(id,updatedData);
    }

    @Delete(':id')
    async deletePlant_details(@Param('id') id: string) {
      return this.Plant_detailsService.deletePlant_details(id);
    }
}

