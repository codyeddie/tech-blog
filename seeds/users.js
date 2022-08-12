const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Big Bro',
    email: 'bigbro@email.com',
    password: 'bigbro123'
  },
  {
    username: 'The Dude ',
    email: 'thedude@email.com',
    password: 'dudebro420'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
