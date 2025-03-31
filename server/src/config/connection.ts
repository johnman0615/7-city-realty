import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { sequelize, User, Agent, Property, PropertyImage, SavedProperty } from '../models'; // Centralized import

dotenv.config();

// Configuration for Sequelize connection
const sequelizeInstance = new Sequelize(
  process.env.DB_NAME || 'properties_db',
  process.env.DB_USER || 'your_database_user',
  process.env.DB_PASSWORD || 'your_password',
  {
    host: process.env.DB_HOST || 'localhost', // Replace with your database host if different
    dialect: 'postgres', // Specify the database dialect
    logging: false, // Disable SQL query logging in the console
  }
);

// Function to connect to the database
const connectToDatabase = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log('Connected to the PostgreSQL database successfully');
  } catch (err) {
    console.error('Error connecting to the database:', (err as Error).message);
    throw err;
  }
};

// Sync all models with the database
const syncDatabase = async () => {
  try {
    await sequelizeInstance.sync({ force: true }); // Set to false for production to avoid dropping tables
    console.log('Database synchronized successfully');
  } catch (err) {
    console.error('Error synchronizing the database:', (err as Error).message);
  }
};

// Call syncDatabase to synchronize the models with the database
syncDatabase();

export default sequelize;
// Export the Sequelize instance and connection function
export { sequelizeInstance as sequelize, connectToDatabase };
