const { Post } = require('../models');

// data for the post model 
const postdata = [
  {
    title: 'airports.',
    post_text: 'airports am i right?',
    user_id: 1
  },
  {
    title: 'fastfood is cursed.',
    post_text: 'you ever neem to a mcdonalds?',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
