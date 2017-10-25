const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagescripturesSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagescripturesSchema.plugin(timestamps);
const Imagescriptures = mongoose.model('imagescriptures', imagescripturesSchema);

module.exports = Imagescriptures;
