// required dependencies
const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require('../models/burger.js');

// Creating the routes 
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne([
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  let condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;