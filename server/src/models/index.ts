// Import all model factories
import { User } from './user';
import { AgentFactory } from './AgentFactory';
import { PropertyFactory } from './PropertyFactory';
import { SavedPropertyFactory } from './SavedPropertyFactory';
import { PropertyImageFactory } from './PropertyImageFactory';
import { sequelize } from '../config/connection'; // Import the centralized sequelize instance

// Initialize models
const Agent = AgentFactory(sequelize);
const Property = PropertyFactory(sequelize);
const SavedProperty = SavedPropertyFactory(sequelize);
const PropertyImage = PropertyImageFactory(sequelize);

// Define model relationships
const defineRelationships = () => {
  // User and Agent relationship
  User.hasOne(Agent, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  Agent.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  // Agent and Property relationship
  Agent.hasMany(Property, {
    foreignKey: 'agent_id',
    onDelete: 'SET NULL',
  });
  Property.belongsTo(Agent, {
    foreignKey: 'agent_id',
  });

  // User (seller) and Property relationship
  User.hasMany(Property, {
    foreignKey: 'seller_id',
    onDelete: 'SET NULL',
  });
  Property.belongsTo(User, { as: 'Seller', foreignKey: 'seller_id' });

  // Property and SavedProperty relationship
  Property.hasMany(SavedProperty, {
    foreignKey: 'property_id',
    onDelete: 'CASCADE',
  });
  SavedProperty.belongsTo(Property, { foreignKey: 'property_id' });

  // User and SavedProperty relationship
  User.hasMany(SavedProperty, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  SavedProperty.belongsTo(User, { foreignKey: 'user_id' });

  // Property and PropertyImage relationship
  Property.hasMany(PropertyImage, {
    foreignKey: 'property_id',
    onDelete: 'CASCADE',
  });
  PropertyImage.belongsTo(Property, { foreignKey: 'property_id' });
};

// Call the function to define associations
defineRelationships();

// Export all models and the sequelize instance
export { sequelize, User, Agent, Property, SavedProperty, PropertyImage };

