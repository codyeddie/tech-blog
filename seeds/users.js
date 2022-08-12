const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// user data fields
const userdata = [
  {
    username: 'thedude',
    email: 'thedude@email.com',
    password: 'amdude420'
  },
  {
    username: 'aybro',
    email: 'brodoinhisbaggins@email.com',
    password: 'sireoftheshire'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
