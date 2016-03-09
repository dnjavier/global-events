'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CategorySchema = new mongoose.Schema({
  name: String
});

export default mongoose.model('Category', CategorySchema);
