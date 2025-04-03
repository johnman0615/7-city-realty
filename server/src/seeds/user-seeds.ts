import { User } from '../models/index';

const userData = [
  {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password123',
    user_type: 'admin',
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
    password: 'password123',
    user_type: 'user',
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData, { individualHooks: true });
};

export default seedUsers;
