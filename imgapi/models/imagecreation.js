const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagecreationSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagecreationSchema.plugin(timestamps);
const Imagecreation = mongoose.model('imagecreation', imagecreationSchema);

module.exports = Imagecreation;
