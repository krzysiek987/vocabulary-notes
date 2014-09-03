'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Quiz', QuizSchema);