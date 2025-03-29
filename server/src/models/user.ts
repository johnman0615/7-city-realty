import { DataTypes } from 'sequelize';
import { sequelize } from '../connection'; // Adjust if necessary

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
  },
  user_type: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      isIn: [['buyer', 'seller', 'agent']],
    },
  },
}, {
  tableName: 'users',
  timestamps: false, // Disable timestamps if not needed
});

export { User };