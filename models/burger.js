var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
       cb(res);
      })
    },

    update: function(condition, cb) {
      orm.update("burgers", condition, function(res) {
       cb(res);
     });
    }
    // The variables cols and vals are arrays.
    //insertOne: function(cols, vals, cb) {
      //orm.create("cats", cols, vals, function(res) {
      //  cb(res);
     // });
    //},
    
};
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  