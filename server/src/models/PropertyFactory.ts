import { DataTypes, Sequelize, Model } from 'sequelize';

export class Property extends Model {
  public property_id!: number;
  public description?: string;
  public price!: number;
  public address!: string;
  public city!: string;
  public state!: string;
  public zip_code!: string;
  public property_type!: 'house' | 'apartment' | 'condo' | 'townhouse';
  public bedrooms?: number;
  public bathrooms?: number;
  public square_feet?: number;
  public agent_id?: number;
  public seller_id?: number;
  public status!: 'available' | 'sold' | 'pending';
}

export const PropertyFactory = (sequelize: Sequelize) => {
  Property.init(
    {
      property_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      property_type: {
        type: DataTypes.ENUM('house', 'apartment', 'condo', 'townhouse'),
        allowNull: false,
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
          model: 'agents',
          key: 'agent_id',
        },
        onDelete: 'SET NULL',
      },
      seller_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'user_id',
        },
        onDelete: 'SET NULL',
      },
      status: {
        type: DataTypes.ENUM('available', 'sold', 'pending'),
        defaultValue: 'available',
      },
    },
    {
      sequelize,
      tableName: 'properties',
    }
  );
  return Property;
};
