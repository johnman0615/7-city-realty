import { DataTypes, Sequelize, Model } from 'sequelize';

export class PropertyImage extends Model {
  public image_id!: number;
  public property_id!: number;
  public image_url!: string;
}

export const PropertyImageFactory = (sequelize: Sequelize) => {
  PropertyImage.init(
    {
      image_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'property_images',
    }
  );
  return PropertyImage;
};
