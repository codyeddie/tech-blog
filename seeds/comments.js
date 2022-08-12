const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'L take.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Just say you have to fly spirit bro.',
    user_id: 2,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
