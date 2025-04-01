import { Sequelize } from 'sequelize';
import pg from 'pg'; 
import dotenv from 'dotenv';
// Ensure './models' exists and contains the necessary exports
import { User } from "../models/UserModels";
import { Agent } from "../models/AgentModels";
import { Property } from "../models/PropertyModels";
import { SavedProperty } from "../models/SavedPropertyModels";
import { PropertyImage } from "../models/PropertyModels"; // Import models

dotenv.config();

let sequelize: Sequelize | null = null;

if (process.env.USE_DATABASE === "true") {
  sequelize = new Sequelize(
    process.env.DB_NAME || "your_database_name",
    process.env.DB_USER || "7cities",
    process.env.DB_PASSWORD || "7cities",
    {
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      dialect: "postgres",
      dialectModule: pg, // Explicitly set pg as the dialect module
      logging: false, // Disable logging for cleaner output
    }
  );

  sequelize
    .authenticate()
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Error connecting to the database:", err));

  // Function to connect to the database
  const connectToDatabase = async () => {
    try {
      await sequelize!.authenticate();
      console.log('Connected to the PostgreSQL database successfully');
    } catch (err) {
      console.error('Error connecting to the database:', (err as Error).message);
      throw err;
    }
  };

  // Sync all models with the database
  const syncDatabase = async () => {
    try {
      await sequelize!.sync({ alter: true }); // Use alter instead of force
      console.log('Database synchronized successfully');
    } catch (err) {
      console.error('Error synchronizing the database:', (err as Error).message);
    }
  };

  // Call syncDatabase to synchronize the models with the database
  syncDatabase();

} else {
  console.log("Database is disabled. Skipping connection.");
}

export { sequelize, connectToDatabase };
