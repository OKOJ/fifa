var orm = require("../config/orm.js");

var player = {
    all: function(cb) {
      orm.all("players", function(res) {
        cb(res);
      });
    },
    /*// The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("cats", cols, vals, function(res) {
        cb(res);
      });
    },*/
    update: function(id, cb) {
      orm.update("players",id,cb);
    },
    create: function(name,cb){
        orm.create("players", name, cb);
    }
    /*delete: function(condition, cb) {
      orm.delete("cats", condition, function(res) {
        cb(res);
      });
    }*/
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = player;
  