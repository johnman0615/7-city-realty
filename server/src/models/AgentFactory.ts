import { DataTypes, Sequelize, Model } from 'sequelize';

export class Agent extends Model {
  public agent_id!: number;
  public user_id!: number;
  public agency_name?: string;
  public rating!: number;
}

export const AgentFactory = (sequelize: Sequelize) => {
  Agent.init(
    {
      agent_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
        onDelete: 'CASCADE',
      },
      agency_name: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.DECIMAL(3, 2),
        defaultValue: 0.0,
      },
    },
    {
      sequelize,
      tableName: 'agents',
    }
  );
  return Agent;
};
