const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagecharitySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagecharitySchema.plugin(timestamps);
const Imagecharity = mongoose.model('imagecharity', imagecharitySchema);

module.exports = Imagecharity;
