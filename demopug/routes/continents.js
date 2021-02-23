var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('continents', {continents});
});


const continents = {
    "Africa": "Africa",
    "Antarctica": "Antarctica",
    "Asia": "Asia",
    "Europe": "Europe",
    "North_America": "North America",
    "Oceania": "Oceania",
    "South_America": "South America"
  }




module.exports = router;
