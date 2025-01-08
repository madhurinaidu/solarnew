// CRUD
import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { DevicesService } from '../services/DevicesService';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/Devices')
@UseGuards(AuthGuard)
export class DevicesController {

    constructor(private readonly DevicesService: DevicesService) {}

    @Post()
    async createDevices(@Body() DevicesData: any) {
      return this.DevicesService.createDevices(DevicesData);
    }

    @Get()
    async getDevices(@Body() DevicesData: any) {
      return this.DevicesService.getDevices();
    }

    @Get(':id')
    async getDevicesById(@Param('id') id: string) {
      return this.DevicesService.getDevicesById(id);
    }

    @Put(':id')
    async updateDevices(@Param('id') id: string,@Body() updatedData: any) {
      return this.DevicesService.updateDevices(id,updatedData);
    }

    @Delete(':id')
    async deleteDevices(@Param('id') id: string) {
      return this.DevicesService.deleteDevices(id);
    }
}

