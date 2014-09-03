'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TranslationSchema = new Schema({
  polish: { type: String, index: true },
  english: { type: String, index: true }
});

module.exports = mongoose.model('Translation', TranslationSchema);