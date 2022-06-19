const async = require('hbs/lib/async');
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();

// all your routes here
router.get('/create', async (req, res, next) => {
    try {
        const allCelebrities = await Celebrity.find();
        res.render('movies/new-movie', { allCelebrities });
    } catch (error) {
        next(error);
    }
});

router.post('/create', async (req, res, next) => {
    const { tilte, genre, plot, cast } = req.body;
    try {
        await Movie.create({ tilte, genre, plot, cast});
        res.redirect('/movies');
    } catch (error) {
        res.redirect('/celebrities/new-movie');
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const allMovies = await Movie.find();
        res.render('movies/movies', { allMovies });
    } catch (error) {
        next(error);
    }
})

module.exports = router;