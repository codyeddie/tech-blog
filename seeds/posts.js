const { Post } = require('../models');

const postdata = [
  {
    title: 'Chicken Wars ',
    post_text: 'Raising Canes or Chik-Fil-a ',
    user_id: 1
  },
  {
    title: 'Airports am I right?',
    post_text: 'airports are the bane of my existence',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
