var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
    update: function(table, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += "devoured=true";
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

  //insertOne: function(table, cols, vals, cb) {
    /*var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }ß

      cb(result);
    });*/
  //},
  // An example of objColVals would be {name: panther, sleepy: true}
  
  
};

// Export the orm object for the model (cat.js).
module.exports = orm;
