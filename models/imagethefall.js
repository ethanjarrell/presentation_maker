const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagethefallSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagethefallSchema.plugin(timestamps);
const Imagethefall = mongoose.model('imagethefall', imagethefallSchema);

module.exports = Imagethefall;
