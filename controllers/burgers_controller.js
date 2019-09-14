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

router.post('/burgers/:id', function(req, res) {
  let condition = 'id = ' + req.params.id;
  console.log(req.params.id);
  burger.updateOne(
    // { devoured: true}, 
  condition, function(data) {
    res.redirect('/');
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) {
      if (result.affectedRows == 0) {
          
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});

// Export routes for server.js to use.
module.exports = router;