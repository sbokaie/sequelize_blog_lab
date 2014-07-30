
function blogPost(sequelize, DataTypes) {
  return sequelize.define('post', {
    content: DataTypes.TEXT,
  });
};

module.exports = blogPost;