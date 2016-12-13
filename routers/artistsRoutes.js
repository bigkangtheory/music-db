const artistsRouter = require('express').Router();
const Artist = require('../models/artist-model');


const getArtistsAz = (req, res) => {
	Artist.findAll({
		order: ['name']
	})
	.then((data) => {
		res.send(data)
	})
};

const getArtist = (req, res) => {
	Artist.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
};

const createArtist = (req, res) => {
	Artist.create(req.body)
	.then((data) => {
		res.send(data)
	})
};

const deleteArtist = (req, res) => {
	Artist.findById(req.params.id)
	.then((artist) => {
		artist.destroy()
	})
	.then(()=> {
		res.send('Artist has been deleted.')
	})
};

const updateName = (req, res) => {
	Artist.findById(req.params.id)
	.then((artist) => {
		artist.update({
				name: req.params.newName
		})
	})
	.then(() => {
		res.send('updated name')
	})
};


//we are at /api/artists
artistsRouter.route('/')
	.get(getArtistsAz)
	.post(createArtist)

artistsRouter.route('/:id')
	.get(getArtist)
	.delete(deleteArtist)

artistsRouter.route('/:id/:newName')
	.put(updateName)


module.exports = artistsRouter;