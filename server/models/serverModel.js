'use strict';

var mongoose = require('mongoose'),
    Player = require('./playerModel'),   
    Schema = mongoose.Schema;

/**
 * Server Schema
 */
var ServerSchema = new Schema({
  _id: {
    type: String,
    required: true
 },
  currentMap: {
    type: String,
    trim: true,
    required: true
  },
  nextMap: {
    type: String,
    trim: true,
    required: true
  },
  players:[Player],
  map:[String],
});

mongoose.model('Server', ServerSchema);