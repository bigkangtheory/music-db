const genresRouter = require('express').Router();
const Genre = require('../models/genre-model');

const getGenresAz = (req, res) => {
	Genre.findAll()
	.then((data) => {
		res.send(data)
	})
};

const getGenre = (req, res) => {
	Genre.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
};

const createGenre = (req, res) => {
	Genre.create(req.body)
	.then(() => {
		res.send('added new genre')
	})
};

const updateGenre = (req, res) => {
	Genre.findById(req.params.id)
		.then((genre) => {
			genre.update({
				title: req.params.newGenre
			})
		})
		.then(() => {
			res.send('updated genre')
		})
};


//URL is /api/genres
genresRouter.route('/')
	.get(getGenresAz)
	.post(createGenre)

genresRouter.route('/:id')
	.get(getGenre)

genresRouter.route('/:id/:newGenre')
	.put(updateGenre)

module.exports = genresRouter;