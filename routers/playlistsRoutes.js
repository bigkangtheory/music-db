const playlistsRouter = require('express').Router();
const Playlist = require('../models/playlist-model');
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

// const getPlaylists = (req, res) => {
// 	Playlist.findAll()
// 	.then((data) => {
// 		console.log(data)
// 		res.send(data)
// 	})
// };

const getPlaylists = (req, res) => {
	Playlist.findAll({
	  include: [{
	    model: Song,
	    include: [Artist, Genre]
	  }]
	})
	.then((data) => {
		res.send(data)
	})
};

const getPlaylist = (req, res) => {
	Playlist.findById(req.params.id, 
		{
			include: [{
			model: Song,
			include: [Artist, Genre]
			}]
		}
	)
	.then((data) => {
		res.send(data)
	})
};

const createPlaylist = (req, res) => {
	Playlist.create(req.body)
	.then((playlist) => {
		if(req.body.song) playlist.addSong(JSON.parse(req.body.song))
		//addsong genre
		//create genres array //save genres directly on playlist
		//adding genres to the playlist
	})
	.then(() => {
		res.send('playlist created with added songs')
	})
};

const deletePlaylist = (req, res) => {
	Playlist.findById(req.params.id)
	.then((playlist) => {
		playlist.destroy()
	})
	.then(() => {
		res.send('deleted playist')
	})
};

//URL is /api/playlists
playlistsRouter.route('/')
	.get(getPlaylists)
	.post(createPlaylist)


playlistsRouter.route('/:id')
	.get(getPlaylist)
	.delete(deletePlaylist)

module.exports = playlistsRouter;