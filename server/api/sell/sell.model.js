'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SellSchema = new mongoose.Schema({
  date: Date,
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  qty: Number,
  name: String,
  lastname: String,
  email: String,
  phone: Number
});

export default mongoose.model('Sell', SellSchema);
