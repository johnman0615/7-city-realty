import { Sequelize } from "sequelize";

const sequelize = new Sequelize("properties_db", "your_user", "your_password", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;