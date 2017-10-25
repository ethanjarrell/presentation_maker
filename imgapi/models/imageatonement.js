const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageatonementSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageatonementSchema.plugin(timestamps);
const Imageatonement = mongoose.model('imageatonement', imageatonementSchema);

module.exports = Imageatonement;
