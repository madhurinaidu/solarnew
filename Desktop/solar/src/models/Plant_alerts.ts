// CRUD
import mongoose, { Schema, Document } from 'mongoose';

interface IPlant_alerts extends Document {
  
    alertId: number;
  
    plantId: number;
  
    statisticalPeriod: string;
  
    pvYield: string;
  
    inverterYield: string;
  
    export: string;
  
    import: string;
  
    revenue: string;
  
}

const Plant_alertsSchema: Schema = new Schema({
  
    alertId: { type: Number, required: false },
  
    plantId: { type: Number, required: false },
  
    statisticalPeriod: { type: String, required: false },
  
    pvYield: { type: String, required: false },
  
    inverterYield: { type: String, required: false },
  
    export: { type: String, required: false },
  
    import: { type: String, required: false },
  
    revenue: { type: String, required: false },
  
});

//const Plant_alertsModel = mongoose.model<IPlant_alerts>('Plant_alerts', Plant_alertsSchema);

export { IPlant_alerts, Plant_alertsSchema };
