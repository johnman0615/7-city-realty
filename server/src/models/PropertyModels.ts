import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/connectionConfig";

let Property: Model | null = null;

if (sequelize) {
  Property = sequelize.define("Property", {
    property_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
} else {
  console.log("Property model is disabled because the database is not active.");
}

const PropertyImage = sequelize.define('PropertyImage', {
  image_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  property_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Property,
      key: 'property_id',
    },
    onDelete: 'CASCADE',
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'property_images',
  timestamps: false,
});

export { Property, PropertyImage };