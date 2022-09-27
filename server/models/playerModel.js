'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Player Schema
 */
var PlayerSchema = new Schema({
  login: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

mongoose.model('Player', PlayerSchema);