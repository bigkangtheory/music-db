const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model.js');
const Genre = require('./genre-model.js')

var Song = sequelizeConnection.define('song', {
  title: {
  	type: Sequelize.STRING,
  	validate: {
  		len: [1, 250],
  		notEmpty: true
  	}
  },

  youtube_url: {
  	type: Sequelize.STRING,
  	validate: {
	  	len: [1, 50],
	  	isUrl: true
  	}
  }
});

//joining Song and Artist tables. this will aumatically add an 'artistId' field to the songs table
//see the docs for more info: http://docs.sequelizejs.com/en/latest/docs/associations/

Song.belongsTo(Artist);

Song.belongsToMany(Genre, {through: 'song_genre'});
Genre.belongsToMany(Song, {through: 'song_genre'});

module.exports = Song;
