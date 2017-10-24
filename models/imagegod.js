const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagegodSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagegodSchema.plugin(timestamps);
const Imagegod = mongoose.model('imagegod', imagegodSchema);

module.exports = Imagegod;
