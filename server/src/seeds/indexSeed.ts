import { seedUsers } from './userSeeds.js';
import { sequelize } from '../config/connectionConfig.js';

if (sequelize) {
  sequelize.sync({ force: true }).then(async () => {
    console.log("Database synchronized successfully.");
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    process.exit(0);
  }).catch((error) => {
    console.error('Error seeding database:', error);
    process.exit(1);
  });
} else {
  console.log("Skipping database synchronization because the database is disabled.");
}
