const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {
    Movies.find()
    .then((response) =>{
        console.log(response);
        res.render("movies.hbs", {
        moviesList: response
        })
    })
    .catch((err) => {
        next(err)
    })
})



module.exports = router;
