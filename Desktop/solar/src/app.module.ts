import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PlantsService } from './services/PlantsService'; 
import { Plant_detailsService } from './services/Plant_detailsService'; 
import { DevicesService } from './services/DevicesService'; 
import { Plant_migrationsService } from './services/Plant_migrationsService'; 
import { Plant_alertsService } from './services/Plant_alertsService'; 
import { ReportsService } from './services/ReportsService'; 
import { PlantsController } from './controllers/PlantsController'; 
import { Plant_detailsController } from './controllers/Plant_detailsController'; 
import { DevicesController } from './controllers/DevicesController'; 
import { Plant_migrationsController } from './controllers/Plant_migrationsController'; 
import { Plant_alertsController } from './controllers/Plant_alertsController'; 
import { ReportsController } from './controllers/ReportsController'; 
import { PlantsSchema } from './models/Plants'; 
import { Plant_detailsSchema } from './models/Plant_details'; 
import { DevicesSchema } from './models/Devices'; 
import { Plant_migrationsSchema } from './models/Plant_migrations'; 
import { Plant_alertsSchema } from './models/Plant_alerts'; 
import { ReportsSchema } from './models/Reports'; 
import { PlantsRepository } from './repositories/PlantsRepository'; 
import { Plant_detailsRepository } from './repositories/Plant_detailsRepository'; 
import { DevicesRepository } from './repositories/DevicesRepository'; 
import { Plant_migrationsRepository } from './repositories/Plant_migrationsRepository'; 
import { Plant_alertsRepository } from './repositories/Plant_alertsRepository'; 
import { ReportsRepository } from './repositories/ReportsRepository'; 
@Module({
imports: [
    MongooseModule.forRoot('mongodb+srv://vallepukomal:komal123@cluster0.i8jxgfd.mongodb.net/solar'),
    MongooseModule.forFeature([{ name: 'Plants', schema: PlantsSchema },{ name: 'Plant_details', schema: Plant_detailsSchema },{ name: 'Devices', schema: DevicesSchema },{ name: 'Plant_migrations', schema: Plant_migrationsSchema },{ name: 'Plant_alerts', schema: Plant_alertsSchema },{ name: 'Reports', schema: ReportsSchema },]),
  ],
    controllers: [AuthController,PlantsController, Plant_detailsController, DevicesController, Plant_migrationsController, Plant_alertsController, ReportsController, ],
    providers: [AuthService, PlantsService, PlantsRepository, Plant_detailsService, Plant_detailsRepository, DevicesService, DevicesRepository, Plant_migrationsService, Plant_migrationsRepository, Plant_alertsService, Plant_alertsRepository, ReportsService, ReportsRepository, ],
})
export class AppModule {}