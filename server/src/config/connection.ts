import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "properties_db",
  process.env.DB_USER || "your_username",
  process.env.DB_PASSWORD || "your_password",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    port: parseInt(process.env.DB_PORT || "5432", 10),
  }
);

export default sequelize;