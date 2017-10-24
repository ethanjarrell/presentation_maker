const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagechastitySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagechastitySchema.plugin(timestamps);
const Imagechastity = mongoose.model('imagechastity', imagechastitySchema);

module.exports = Imagechastity;
