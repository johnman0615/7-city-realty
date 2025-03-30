import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
// Ensure './models' exists and contains the necessary exports
import { User, Agent, Property, SavedProperty, PropertyImage } from './models'; // Import models

dotenv.config();

// Configuration for Sequelize connection
const sequelize = new Sequelize(
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
    await sequelize.authenticate();
    console.log('Connected to the PostgreSQL database successfully');
  } catch (err) {
    console.error('Error connecting to the database:', (err as Error).message);
    throw err;
  }
};

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

// Export the Sequelize instance and connection function
export { sequelize, connectToDatabase };
