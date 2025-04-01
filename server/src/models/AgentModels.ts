import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/connectionConfig";

let Agent: Model | null = null;

if (sequelize) {
  Agent = sequelize.define("Agent", {
    agent_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: 'user_id',
      },
      onDelete: 'CASCADE',
    },
    specialties: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  });

  // Associate Agent with User
  Agent.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
  User.hasOne(Agent, { foreignKey: 'user_id', as: 'agent' });
} else {
  console.log("Agent model is disabled because the database is not active.");
}

export { Agent };