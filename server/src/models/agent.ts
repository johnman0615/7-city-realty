import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';
import { User } from './User'; // Reference the User model

const Agent = sequelize.define('Agent', {
  agent_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // Referencing the User model
      key: 'user_id',
    },
    onDelete: 'CASCADE',
  },
  agency_name: {
    type: DataTypes.STRING(100),
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    defaultValue: 0.0,
  },
}, {
  tableName: 'agents',
  timestamps: false,
});

export { Agent };