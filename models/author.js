
function blogAuthor(sequelize, DataTypes) {
  return sequelize.define('author', {
    name: DataTypes.STRING,
    validate: {
      notEmpty: true
    }
  });
};

module.exports = blogAuthor;