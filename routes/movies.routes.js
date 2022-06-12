const async = require('hbs/lib/async');
const Movie = require('../models/Movie.model');

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
    try {
        const { tilte, genre, plot, cast } = req.body;
        await Movie.create({
            tilte,
            genre,
            plot, 
            cast
        });
        res.redirect('movies/movies');
    } catch (error) {
        next(error);
    }
});

router.get('/mobies', async (req, res, next) => {
    try {
        const allMovies = await Movies.find();
        res.render('movies/movies', { allMovies });
    } catch (error) {
        next(error);
    }
})

module.exports = router;