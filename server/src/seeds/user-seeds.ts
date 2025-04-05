import { User } from '../models/index';
import bcrypt from 'bcryptjs'; 

export const seedUsers = async () => {
  await User.bulkCreate([
    {
      name: 'Jolly Guru',
      username: 'JollyGuru',
      email: 'jolly@guru.com',
      password: await bcrypt.hash('password', 10), // Hash passwords using bcryptjs
    },
    {
      name: 'Sunny Scribe',
      username: 'SunnyScribe',
      email: 'sunny@scribe.com',
      password: await bcrypt.hash('password', 10),
    },
    {
      name: 'Radiant Comet',
      username: 'RadiantComet',
      email: 'radiant@comet.com',
      password: await bcrypt.hash('password', 10),
    },
  ], { individualHooks: true });
};