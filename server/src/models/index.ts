import sequelize from "../config/connection.js"; // Add `.js` extension
import User from "./User.js"; // Add `.js` extension
import Property from "./Property.js"; // Add `.js` extension
import Agent from "./Agent.js"; // Add `.js` extension
import SavedProperty from "./SavedProperty.js"; // Add `.js` extension
import PropertyImage from "./PropertyImage.js"; // Add `.js` extension

// Define relationships
User.hasOne(Agent, { foreignKey: 'user_id' });
Agent.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Property, { foreignKey: 'seller_id' });
Property.belongsTo(User, { as: 'Seller', foreignKey: 'seller_id' });

User.hasMany(SavedProperty, { foreignKey: 'user_id' });
SavedProperty.belongsTo(User, { foreignKey: 'user_id' });

export { sequelize, User, Property, Agent, SavedProperty, PropertyImage };