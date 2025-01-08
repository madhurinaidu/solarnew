// CRUD
// tests/Plants.test.ts

import request from 'supertest';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import PlantsRoute from '../src/routes/PlantsRoute';
import { PlantsService } from '../src/services/PlantsService';
import { verifyToken } from '../src/middlewares/auth';

jest.mock('../src/services/PlantsService');  // Mock the service
jest.mock('../src/middlewares/auth', () => ({
  verifyToken: jest.fn(() => true),  // Mock verifyToken to always return true
}));

const app: Express = express();
app.use(bodyParser.json());
app.use('/solar', PlantsRoute);

// Utility function to generate mock entities based on column definitions
function generateMockData(columns: { columnName: string; columnType: string }[], count: number = 1) {
  const mockData = [];

  for (let i = 0; i < count; i++) {
    const record: { [key: string]: any } = {};
    columns.forEach((col) => {
      // Generate dummy data based on column type
      if (col.columnType === 'string') {
        record[col.columnName] = `${col.columnName}_value_${i + 1}`;
      } else if (col.columnType === 'number') {
        record[col.columnName] = Math.floor(Math.random() * 1000);
      }
      // Add more types as needed (e.g., boolean, date, etc.)
    });
    mockData.push(record);
  }

  return count === 1 ? mockData[0] : mockData; // Return a single object if count is 1, otherwise an array
}

// Generate mock entities dynamically
const columnsOfTable = [
  { columnName: 'plant_id', columnType: 'INT' },

  { columnName: 'plant_name', columnType: 'VARCHAR' },

  { columnName: 'country', columnType: 'VARCHAR' },

  { columnName: 'address', columnType: 'VARCHAR' },

  { columnName: 'grid_connection', columnType: 'VARCHAR' },

  { columnName: 'total_string_capacity', columnType: 'DECIMAL' },

  { columnName: 'current_power', columnType: 'DECIMAL' },

  { columnName: 'specific_energy', columnType: 'DECIMAL' },

  { columnName: 'yield_today', columnType: 'DECIMAL' },

  { columnName: 'performance_ratio', columnType: 'DECIMAL' },

  { columnName: 'global_irradiation', columnType: 'DECIMAL' },

  { columnName: 'plant_type', columnType: 'VARCHAR' },

  { columnName: 'installed_power', columnType: 'DECIMAL' },

  { columnName: 'real_time_power', columnType: 'DECIMAL' },

  { columnName: 'monthly_yield', columnType: 'DECIMAL' },

  { columnName: 'annual_yield', columnType: 'DECIMAL' },

  { columnName: 'plant_status', columnType: 'VARCHAR' }
];
const mockEntities = Array.from({ length: 2 }, () => generateMockData(columnsOfTable));

describe('PlantsController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test for createEntity
  it('should create a new entity and return 201 status', async () => {
    const mockEntity = generateMockData(columnsOfTable);
    (PlantsService.createPlants as jest.Mock).mockResolvedValue(mockEntity);

    const response = await request(app)
      .post('/solar/Plants')
      .set('Authorization', 'Bearer mockToken')
      .send(mockEntity);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: 'Plants created successfully',
      record: mockEntity,
    });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  // Test for getAllEntities
  it('should retrieve all entities and return 200 status', async () => {
    (PlantsService.getAllPlantss as jest.Mock).mockResolvedValue(mockEntities);

    const response = await request(app)
      .get('/solar/Plants')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockEntities);
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  // Test for getEntity by ID
  it('should retrieve an entity by ID and return 200 status', async () => {
    const mockEntity = generateMockData(columnsOfTable);
    (PlantsService.getPlantsById as jest.Mock).mockResolvedValue(mockEntity);

    const response = await request(app)
      .get('/solar/Plants/1')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockEntity);
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  it('should return 404 if entity is not found', async () => {
    (PlantsService.getPlantsById as jest.Mock).mockResolvedValue(null);

    const response = await request(app)
      .get('/solar/Plants/999')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Plants not found' });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  // Test for updateEntity
  it('should update an entity and return 200 status', async () => {
    const updatedEntity = generateMockData(columnsOfTable);
    (PlantsService.updatePlants as jest.Mock).mockResolvedValue(updatedEntity);

    const response = await request(app)
      .put('/solar/Plants/1')
      .set('Authorization', 'Bearer mockToken')
      .send(updatedEntity);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Plants updated successfully',
      record: updatedEntity,
    });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  it('should return 404 if entity to update is not found', async () => {
    const updatedEntity = generateMockData(columnsOfTable);
    (PlantsService.updatePlants as jest.Mock).mockResolvedValue(null);

    const response = await request(app)
      .put('/solar/Plants/999')
      .set('Authorization', 'Bearer mockToken')
      .send(updatedEntity);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Plants not found' });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  // Test for deleteEntity
  it('should delete an entity and return 200 status', async () => {
    (PlantsService.deletePlants as jest.Mock).mockResolvedValue(true);

    const response = await request(app)
      .delete('/solar/Plants/1')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Plants deleted successfully' });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  it('should return 404 if entity to delete is not found', async () => {
    (PlantsService.deletePlants as jest.Mock).mockResolvedValue(null);

    const response = await request(app)
      .delete('/solar/Plants/999')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Plants not found' });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });
});
