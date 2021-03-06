'use strict';

var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name:  {type: String, required:true},
  price: {type: Number, required:true},
});

module.exports = mongoose.model('Product', productSchema );
