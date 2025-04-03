import seedUsers from './user-seeds.js'; // Use default import
import sequelize from '../config/connection';
import authRoutes from "./auth-routes.js"; // Add `.js`
import apiRoutes from "./api/index.js"; // Add `.js`
import authenticateJWT from "../middleware/authenticateJWT.js"; // Add `.js`

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
