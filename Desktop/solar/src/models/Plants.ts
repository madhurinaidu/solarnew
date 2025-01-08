// CRUD
import mongoose, { Schema, Document } from 'mongoose';

interface IPlants extends Document {
  
    plantId: number;
  
    plantName: string;
  
    country: string;
  
    address: string;
  
    gridConnection: string;
  
    totalStringCapacity: string;
  
    currentPower: string;
  
    specificEnergy: string;
  
    yieldToday: string;
  
    performanceRatio: string;
  
    globalIrradiation: string;
  
    plantType: string;
  
    installedPower: string;
  
    realTimePower: string;
  
    monthlyYield: string;
  
    annualYield: string;
  
    plantStatus: string;
  
}

const PlantsSchema: Schema = new Schema({
  
    plantId: { type: Number, required: false },
  
    plantName: { type: String, required: false },
  
    country: { type: String, required: false },
  
    address: { type: String, required: false },
  
    gridConnection: { type: String, required: false },
  
    totalStringCapacity: { type: String, required: false },
  
    currentPower: { type: String, required: false },
  
    specificEnergy: { type: String, required: false },
  
    yieldToday: { type: String, required: false },
  
    performanceRatio: { type: String, required: false },
  
    globalIrradiation: { type: String, required: false },
  
    plantType: { type: String, required: false },
  
    installedPower: { type: String, required: false },
  
    realTimePower: { type: String, required: false },
  
    monthlyYield: { type: String, required: false },
  
    annualYield: { type: String, required: false },
  
    plantStatus: { type: String, required: false },
  
});

//const PlantsModel = mongoose.model<IPlants>('Plants', PlantsSchema);

export { IPlants, PlantsSchema };
