const async = require('hbs/lib/async');
const Celebrity = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();

// all your routes here
router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity');
});

router.post('/create', async (req, res, next) => {
    try {
        const { name, ocupation, catchPhrase } = req.body;
        await Celebrity.create({
            name,
            ocupation,
            catchPhrase,
        });
        res.redirect('/celebrities');
    } catch (error) {
        res.redirect('/celebrities/new-celebrity');
        next(error);
    }
});

module.exports = router;