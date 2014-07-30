module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable('blogPosts', {			
     id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
     },
     authorId: {
      type: DataTypes.INTEGER,
      foreignKey: true
     }
    })
    .complete(done)
  },
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('blogPosts')
     .complete(done)
  }
}
