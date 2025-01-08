// CRUD
import mongoose, { Schema, Document } from 'mongoose';

interface IPlant_details extends Document {
  
    plantId: number;
  
    noOfDevices: number;
  
    location: string;
  
    revenue: string;
  
    images: string;
  
    videos: string;
  
    deviceName: string;
  
    totalStringCapacity: string;
  
    yield: string;
  
    totalYield: string;
  
    specificEnergy: string;
  
    peakAcPower: string;
  
    gridConnectionDuration: string;
  
}

const Plant_detailsSchema: Schema = new Schema({
  
    plantId: { type: Number, required: false },
  
    noOfDevices: { type: Number, required: false },
  
    location: { type: String, required: false },
  
    revenue: { type: String, required: false },
  
    images: { type: String, required: false },
  
    videos: { type: String, required: false },
  
    deviceName: { type: String, required: false },
  
    totalStringCapacity: { type: String, required: false },
  
    yield: { type: String, required: false },
  
    totalYield: { type: String, required: false },
  
    specificEnergy: { type: String, required: false },
  
    peakAcPower: { type: String, required: false },
  
    gridConnectionDuration: { type: String, required: false },
  
});

//const Plant_detailsModel = mongoose.model<IPlant_details>('Plant_details', Plant_detailsSchema);

export { IPlant_details, Plant_detailsSchema };
