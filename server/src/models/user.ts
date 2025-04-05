import { DataTypes, Model } from "sequelize"; 
import { sequelize } from "../config/connection";
import bcrypt from "bcryptjs";

// Define User attributes interface
interface UserAttributes {
  user_id?: number;
  name: string;
  email: string;
  username: string;
  password: string;
  user_type: 'buyer' | 'seller' | 'agent'; // Added user_type with specific values
}

// Define User model class
class User extends Model<UserAttributes> implements UserAttributes {
  public user_id!: number;
  public name!: string;
  public email!: string;
  public username!: string;
  public password!: string;
  public user_type!: 'buyer' | 'seller' | 'agent';
}

// Initialize model
User.init(
  {
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
    user_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['buyer', 'seller', 'agent']],
      },
    },
  },
  {
    sequelize, // Pass the Sequelize instance
    tableName: "users",
    timestamps: false,
    hooks: {
      beforeCreate: async (user: User) => {
        user.password = await bcrypt.hash(user.password, 10); // Hash password before saving
      },
    },
  }
);

export { User };
