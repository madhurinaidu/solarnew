// CRUD
import mongoose, { Schema, Document } from 'mongoose';

interface IReports extends Document {
  
    reportId: number;
  
    plantId: number;
  
    reportType: string;
  
    fromDate: string;
  
    toDate: string;
  
    statisticalPeriod: string;
  
    pvYield: string;
  
    inverterYield: string;
  
    export: string;
  
    importRevenue: string;
  
}

const ReportsSchema: Schema = new Schema({
  
    reportId: { type: Number, required: false },
  
    plantId: { type: Number, required: false },
  
    reportType: { type: String, required: false },
  
    fromDate: { type: String, required: false },
  
    toDate: { type: String, required: false },
  
    statisticalPeriod: { type: String, required: false },
  
    pvYield: { type: String, required: false },
  
    inverterYield: { type: String, required: false },
  
    export: { type: String, required: false },
  
    importRevenue: { type: String, required: false },
  
});

//const ReportsModel = mongoose.model<IReports>('Reports', ReportsSchema);

export { IReports, ReportsSchema };
