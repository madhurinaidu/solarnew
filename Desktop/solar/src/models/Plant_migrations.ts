// CRUD
import mongoose, { Schema, Document } from 'mongoose';

interface IPlant_migrations extends Document {
  
    migrationId: number;
  
    plantId: number;
  
    status: string;
  
    creationTime: Date;
  
    originalCompany: string;
  
    targetCompany: string;
  
    createdBy: string;
  
    approvalDeadline: Date;
  
    operation: string;
  
}

const Plant_migrationsSchema: Schema = new Schema({
  
    migrationId: { type: Number, required: false },
  
    plantId: { type: Number, required: false },
  
    status: { type: String, required: false },
  
    creationTime: { type: Date, required: false },
  
    originalCompany: { type: String, required: false },
  
    targetCompany: { type: String, required: false },
  
    createdBy: { type: String, required: false },
  
    approvalDeadline: { type: Date, required: false },
  
    operation: { type: String, required: false },
  
});

//const Plant_migrationsModel = mongoose.model<IPlant_migrations>('Plant_migrations', Plant_migrationsSchema);

export { IPlant_migrations, Plant_migrationsSchema };
