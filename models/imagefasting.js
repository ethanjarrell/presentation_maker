const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagefastingSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagefastingSchema.plugin(timestamps);
const Imagefasting = mongoose.model('imagefasting', imagefastingSchema);

module.exports = Imagefasting;
