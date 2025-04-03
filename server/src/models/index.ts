import sequelize from '../config/connection';
import User from './User';
import Property from './Property';
import Agent from './Agent';
import SavedProperty from './SavedProperty';
import PropertyImage from './PropertyImage';

// Define relationships
User.hasOne(Agent, { foreignKey: 'user_id' });
Agent.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Property, { foreignKey: 'seller_id' });
Property.belongsTo(User, { as: 'Seller', foreignKey: 'seller_id' });

User.hasMany(SavedProperty, { foreignKey: 'user_id' });
SavedProperty.belongsTo(User, { foreignKey: 'user_id' });

export { sequelize, User, Property, Agent, SavedProperty, PropertyImage };