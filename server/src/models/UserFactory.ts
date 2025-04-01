import { DataTypes, Sequelize, Model } from 'sequelize';

export class User extends Model {
  public user_id!: number;
  public name!: string;
  public email!: string;
  public phone?: string;
  public user_type!: 'buyer' | 'seller' | 'agent';
}

export const UserFactory = (sequelize: Sequelize) => {
  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
      },
      user_type: {
        type: DataTypes.ENUM('buyer', 'seller', 'agent'),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'users',
    }
  );
  return User;
};