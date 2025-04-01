import { DataTypes } from 'sequelize';
import { sequelize } from '../config/connectionConfig';
import { User } from './UserModels';
import { Property } from './PropertyModels';
import { SavedPropertyFactory } from "./SavedPropertyModels"; // Updated path

const SavedProperty = sequelize.define('SavedProperty', {
  saved_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
    onDelete: 'CASCADE',
  },
  property_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Property,
      key: 'property_id',
    },
    onDelete: 'CASCADE',
  },
  saved_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'saved_properties',
  timestamps: false,
});

export { SavedProperty };