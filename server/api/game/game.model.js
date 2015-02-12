'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  home: {
  	name: String,
  	score: Number
  },
  away: {
  	name: String,
  	score: Number
  }
});

module.exports = mongoose.model('Game', GameSchema);
