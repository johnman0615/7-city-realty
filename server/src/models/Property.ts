import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection";

class Property extends Model {
  public id!: number;
  public description!: string;
  public price!: number;
  public address!: string;
  public city!: string;
  public state!: string;
  public zip_code!: string;
  public property_type!: string;
  public bedrooms?: number;
  public bathrooms?: number;
  public square_feet?: number;
  public agent_id?: number;
  public seller_id?: number;
  public status!: "available" | "sold" | "pending";
}

Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    property_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
    },
    square_feet: {
      type: DataTypes.INTEGER,
    },
    agent_id: {
      type: DataTypes.INTEGER,
    },
    seller_id: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM("available", "sold", "pending"),
      defaultValue: "available",
    },
  },
  {
    sequelize,
    tableName: "properties",
    timestamps: false,
  }
);

export default Property;