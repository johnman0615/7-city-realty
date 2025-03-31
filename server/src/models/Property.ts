import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';
import { Agent } from './Agent';
import { User } from './User';

const Property = sequelize.define('Property', {
  property_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  property_type: {
    type: DataTypes.STRING(50),
    validate: {
      isIn: [['house', 'apartment', 'condo', 'townhouse']],
    },
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
    references: {
      model: Agent,
      key: 'agent_id',
    },
    onDelete: 'SET NULL',
  },
  seller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
    onDelete: 'SET NULL',
  },
  status: {
    type: DataTypes.STRING(20),
    defaultValue: 'available',
    validate: {
      isIn: [['available', 'sold', 'pending']],
    },
  },
}, {
  tableName: 'properties',
  timestamps: false,
});

export { Property };