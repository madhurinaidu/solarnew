// CRUD
// tests/Reports.test.ts

import request from 'supertest';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import ReportsRoute from '../src/routes/ReportsRoute';
import { ReportsService } from '../src/services/ReportsService';
import { verifyToken } from '../src/middlewares/auth';

jest.mock('../src/services/ReportsService');  // Mock the service
jest.mock('../src/middlewares/auth', () => ({
  verifyToken: jest.fn(() => true),  // Mock verifyToken to always return true
}));

const app: Express = express();
app.use(bodyParser.json());
app.use('/solar', ReportsRoute);

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
  { columnName: 'report_id', columnType: 'INT' },

  { columnName: 'plant_id', columnType: 'INT' },

  { columnName: 'report_type', columnType: 'ENUM' },

  { columnName: 'from_date', columnType: 'DATE' },

  { columnName: 'to_date', columnType: 'DATE' },

  { columnName: 'statistical_period', columnType: 'VARCHAR' },

  { columnName: 'pv_yield', columnType: 'DECIMAL' },

  { columnName: 'inverter_yield', columnType: 'DECIMAL' },

  { columnName: 'export', columnType: 'DECIMAL' },

  { columnName: 'import_revenue', columnType: 'DECIMAL' }
];
const mockEntities = Array.from({ length: 2 }, () => generateMockData(columnsOfTable));

describe('ReportsController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test for createEntity
  it('should create a new entity and return 201 status', async () => {
    const mockEntity = generateMockData(columnsOfTable);
    (ReportsService.createReports as jest.Mock).mockResolvedValue(mockEntity);

    const response = await request(app)
      .post('/solar/Reports')
      .set('Authorization', 'Bearer mockToken')
      .send(mockEntity);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: 'Reports created successfully',
      record: mockEntity,
    });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  // Test for getAllEntities
  it('should retrieve all entities and return 200 status', async () => {
    (ReportsService.getAllReportss as jest.Mock).mockResolvedValue(mockEntities);

    const response = await request(app)
      .get('/solar/Reports')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockEntities);
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  // Test for getEntity by ID
  it('should retrieve an entity by ID and return 200 status', async () => {
    const mockEntity = generateMockData(columnsOfTable);
    (ReportsService.getReportsById as jest.Mock).mockResolvedValue(mockEntity);

    const response = await request(app)
      .get('/solar/Reports/1')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockEntity);
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  it('should return 404 if entity is not found', async () => {
    (ReportsService.getReportsById as jest.Mock).mockResolvedValue(null);

    const response = await request(app)
      .get('/solar/Reports/999')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Reports not found' });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  // Test for updateEntity
  it('should update an entity and return 200 status', async () => {
    const updatedEntity = generateMockData(columnsOfTable);
    (ReportsService.updateReports as jest.Mock).mockResolvedValue(updatedEntity);

    const response = await request(app)
      .put('/solar/Reports/1')
      .set('Authorization', 'Bearer mockToken')
      .send(updatedEntity);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Reports updated successfully',
      record: updatedEntity,
    });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  it('should return 404 if entity to update is not found', async () => {
    const updatedEntity = generateMockData(columnsOfTable);
    (ReportsService.updateReports as jest.Mock).mockResolvedValue(null);

    const response = await request(app)
      .put('/solar/Reports/999')
      .set('Authorization', 'Bearer mockToken')
      .send(updatedEntity);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Reports not found' });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  // Test for deleteEntity
  it('should delete an entity and return 200 status', async () => {
    (ReportsService.deleteReports as jest.Mock).mockResolvedValue(true);

    const response = await request(app)
      .delete('/solar/Reports/1')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Reports deleted successfully' });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });

  it('should return 404 if entity to delete is not found', async () => {
    (ReportsService.deleteReports as jest.Mock).mockResolvedValue(null);

    const response = await request(app)
      .delete('/solar/Reports/999')
      .set('Authorization', 'Bearer mockToken');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Reports not found' });
    expect(verifyToken).toHaveBeenCalledWith('Bearer mockToken');
  });
});
