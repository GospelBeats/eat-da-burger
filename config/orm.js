 const connection = require("./connection");

 //let connection = require('../config/connection.js');


const orm = {

    selectAll: function (burger, cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            } console.log(result);
            cb(result);
        });
    },

    insertOne: function (burger, cb) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [burger, false], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (id, cb) {
        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }

};

module.exports = orm;