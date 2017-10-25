const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagepriesthoodSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagepriesthoodSchema.plugin(timestamps);
const Imagepriesthood = mongoose.model('imagepriesthood', imagepriesthoodSchema);

module.exports = Imagepriesthood;
