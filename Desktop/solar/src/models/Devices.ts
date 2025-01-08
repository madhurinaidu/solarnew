// CRUD
import mongoose, { Schema, Document } from 'mongoose';

interface IDevices extends Document {
  
    deviceId: number;
  
    plantId: number;
  
    deviceName: string;
  
    deviceModel: string;
  
    deviceSerialNumber: string;
  
    nominalPower: string;
  
    realTimePower: string;
  
    dailyYield: string;
  
    status: string;
  
}

const DevicesSchema: Schema = new Schema({
  
    deviceId: { type: Number, required: false },
  
    plantId: { type: Number, required: false },
  
    deviceName: { type: String, required: false },
  
    deviceModel: { type: String, required: false },
  
    deviceSerialNumber: { type: String, required: false },
  
    nominalPower: { type: String, required: false },
  
    realTimePower: { type: String, required: false },
  
    dailyYield: { type: String, required: false },
  
    status: { type: String, required: false },
  
});

//const DevicesModel = mongoose.model<IDevices>('Devices', DevicesSchema);

export { IDevices, DevicesSchema };
