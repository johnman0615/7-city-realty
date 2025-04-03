import { DataTypes } from 'sequelize';
import sequelize from '../config/connection';
import Property from './Property'; // Use default import for Property

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
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default PropertyImage;