const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagetithingSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagetithingSchema.plugin(timestamps);
const Imagetithing = mongoose.model('imagetithing', imagetithingSchema);

module.exports = Imagetithing;
