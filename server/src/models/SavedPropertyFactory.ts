import { DataTypes, Sequelize, Model } from 'sequelize';

export class SavedProperty extends Model {
  public saved_id!: number;
  public user_id!: number;
  public property_id!: number;
}

export const SavedPropertyFactory = (sequelize: Sequelize) => {
  SavedProperty.init(
    {
      saved_id: {
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
      property_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'properties',
          key: 'property_id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      tableName: 'saved_properties',
    }
  );
  return SavedProperty;
};
