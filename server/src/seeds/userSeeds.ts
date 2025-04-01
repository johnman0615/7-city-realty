import { User } from '../models/IndexModels.js';
import bcrypt from 'bcryptjs'; 

export const seedUsers = async () => {
  await User.bulkCreate([
    {
      username: 'JollyGuru',
      email: 'jolly@guru.com',
      password: await bcrypt.hash('password', 10), // Hash passwords using bcryptjs
    },
    {
      username: 'SunnyScribe',
      email: 'sunny@scribe.com',
      password: await bcrypt.hash('password', 10),
    },
    {
      username: 'RadiantComet',
      email: 'radiant@comet.com',
      password: await bcrypt.hash('password', 10),
    },
  ], { individualHooks: true });
};
