import { Sequelize } from "sequelize";
import { UserFactory } from "./UserModels"; // Adjusted import path to match case sensitivity
import { AgentFactory } from "./AgentModels"; // Updated import
import { PropertyFactory, PropertyImageFactory } from "./PropertyModels"; // Updated import
import { sequelize } from "../config/connectionConfig"; // Adjust the import path as necessary

// Initialize models
const User = UserFactory(sequelize);
const Agent = AgentFactory(sequelize);
const Property = PropertyFactory(sequelize);
const SavedProperty = SavedPropertyFactory(sequelize);
const PropertyImage = PropertyImageFactory(sequelize);

// Define model relationships
const defineRelationships = () => {
  // User and Agent relationship
  User.hasOne(Agent, {
    foreignKey: "user_id", // Foreign key in Agent table
    onDelete: "CASCADE", // Delete agent if user is deleted
  });
  Agent.belongsTo(User, {
    foreignKey: "user_id", // Foreign key in Agent table
    onDelete: "CASCADE", // Delete agent if user is deleted
  });

  // Agent and Property relationship
  Agent.hasMany(Property, {
    foreignKey: "agent_id",
    onDelete: "SET NULL",
  });
  Property.belongsTo(Agent, {
    foreignKey: "agent_id",
  });

  // User (seller) and Property relationship
  User.hasMany(Property, {
    foreignKey: "seller_id",
    onDelete: "SET NULL",
  });
  Property.belongsTo(User, { as: "Seller", foreignKey: "seller_id" });

  // Property and SavedProperty relationship
  Property.hasMany(SavedProperty, {
    foreignKey: "property_id",
    onDelete: "CASCADE",
  });
  SavedProperty.belongsTo(Property, { foreignKey: "property_id" });

  // User and SavedProperty relationship
  User.hasMany(SavedProperty, { 
    foreignKey: "user_id", 
    onDelete: "CASCADE" });
  SavedProperty.belongsTo(User, { foreignKey: "user_id" });

  // Property and PropertyImage relationship
  Property.hasMany(PropertyImage, {
    foreignKey: "property_id",
    onDelete: "CASCADE",
  });
  PropertyImage.belongsTo(Property, { foreignKey: "property_id" });
};

// Call the function to define associations
defineRelationships();

// Export all models
export { sequelize, User, Agent, Property, SavedProperty, PropertyImage };