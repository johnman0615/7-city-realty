import { DataTypes } from 'sequelize';
import { sequelize } from '../config/connection';
import { Property } from './Property';

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

export { PropertyImage };