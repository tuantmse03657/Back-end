var mongoose = require('mongoose');
var crypto = require('crypto');
var logger = require('../helpers/logger');
var Schema = mongoose.Schema;
var CreateUpdatedAt = require('mongoose-timestamp');

// Define Product Schema
var Product = new Schema({
    id:{
      type: String,
      index: true,
      require: true,
    },
    name: {
        type: String,
        index: true,
        require: true
    },
    sku: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    remain: Number,
    instock:Boolean
});

module.exports = mongoose.model('Product', Product);
