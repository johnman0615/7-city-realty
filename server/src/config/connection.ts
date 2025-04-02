import dotenv from 'dotenv';
// import { User, Agent, Property, PropertyImage, SavedProperty } from '../models'; // Centralized import
// import sequelize from '../models'; // Import sequelize directly from its definition file

dotenv.config();

// Function to connect to the database
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate(); // Use the centralized sequelize instance
    console.log('Connected to the PostgreSQL database successfully');
  } catch (err) {
    console.error('Error connecting to the database:', (err as Error).message);
    throw err;
  }
};
import { Sequelize } from 'sequelize';

// Create a new Sequelize instance with database credentials
const sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
});

// Sync all models with the database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Set to false for production to avoid dropping tables
    console.log('Database synchronized successfully');
  } catch (err) {
    console.error('Error synchronizing the database:', (err as Error).message);
  }
};

// Call syncDatabase to synchronize the models with the database
syncDatabase();

export default sequelize;
// Export the Sequelize instance and connection function
export { sequelize, connectToDatabase };