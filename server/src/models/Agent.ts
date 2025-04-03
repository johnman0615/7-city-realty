import { DataTypes } from 'sequelize';
import sequelize from '../config/connection';

const AgentModel = sequelize.define('Agent', {
  agent_id: {
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
    allowNull: false,
  },
});

export default AgentModel; // Use a unique name for the export