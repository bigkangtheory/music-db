const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//takes 2 arguments. name of table and schema.
//same as mongoose.model()
var Artist = sequelizeConnection.define('artist', {
  name: {
    type: Sequelize.STRING,
    validate: {
     	len: [1,100],
     	notEmpty: true,
    }
  }
});

module.exports = Artist;

// function(sequelize, DataTypes) {
//   var Artist = sequelize.define("artist", {
//     title: DataTypes.STRING
//   }, 
//   {
//     classMethods: {
//       associate: function(models) {
//         Artist.belongsTo(models.Song)
//       }
//     }
//   });

//   return Artist;
// };