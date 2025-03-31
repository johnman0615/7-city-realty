import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection";

class Property extends Model {}

Property.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: { model: "users", key: "id" },
    },
  },
  {
    sequelize,
    modelName: "property",
    timestamps: true,
  }
);

export default Property;
