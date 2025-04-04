import sequelize from "../config/connection.js";
import User from "./User.js";
import Property from "./Property.js";
import Agent from "./Agent.js";
import SavedProperty from "./SavedProperty.js";
import PropertyImage from "./PropertyImage.js";

export { sequelize, User, Property, Agent, SavedProperty, PropertyImage };