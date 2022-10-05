'use strict';

var mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema;
/**
 * Bracket Schema
 */
var BracketSchema = new Schema({
  _id: {
    type: String,
    required: true
 },
  bracket: {
    type: Object,
    required: true
  }
});

mongoose.model('Bracket', BracketSchema);