var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    
  console.log(req.params); // Det er vores paramter vi søger efter, f.eks www.dkexit.eu/users  - hvor users indholdet er vores param
  console.log(req.body); // Indholdet i vores request
  console.log(req.url); // url f.eks /about
  console.log(req.query); // Hvis vi sender en parameter med vores query i headeren f.eks  ?id=109

  res.render('index', { title: 'Express' });
  
});

module.exports = router;
