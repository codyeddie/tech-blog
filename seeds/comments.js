const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'chik fil a is mid.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Bro you mid tf.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Bro just say you fly spirt fr.',
    user_id: 1,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
