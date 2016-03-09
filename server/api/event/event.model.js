'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EventSchema = new mongoose.Schema({
  date: Date,
  title: String,
  desc: String,
  where: String,
  image: String,
  organizer: String,
  price: Number,
  qty: Number,
  category: String,
  limitAge: Number,
  openDoors: Date,
  chooseSeat: Boolean
});

export default mongoose.model('Event', EventSchema);
