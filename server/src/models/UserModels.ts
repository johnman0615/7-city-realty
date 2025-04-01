import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/connectionConfig";
import bcrypt from 'bcryptjs';

let User: Model | null = null;

if (sequelize) {
  User = sequelize.define("User", {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'users',
    timestamps: false,
    hooks: {
      beforeCreate: async (user: any) => {
        user.password = await bcrypt.hash(user.password, 10); // Hash password before saving
      },
    },
  });
} else {
  console.log("User model is disabled because the database is not active.");
}

export { User };