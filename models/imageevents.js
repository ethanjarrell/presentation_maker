const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageeventsSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageeventsSchema.plugin(timestamps);
const Imageevents = mongoose.model('imageevents', imageeventsSchema);

module.exports = Imageevents;
