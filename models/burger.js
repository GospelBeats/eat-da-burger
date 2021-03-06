// Import the ORM to implement functions that will interact with the database
let orm = require('../config/orm.js');

// Create burger object
let burger = {
  // Select all burger table data
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(vals, cb) {
    orm.insertOne(vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(condition, cb) {
    orm.updateOne(condition, function(res) {
      cb(res);
    });
  },


  // Delete a burger from the db.
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, 
        function(res) {
            cb(res);
        });
    }
};
// Export the database functions for the controller (burgerController.js).
module.exports = burger;
