const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagesacrificeSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagesacrificeSchema.plugin(timestamps);
const Imagesacrifice = mongoose.model('imagesacrifice', imagesacrificeSchema);

module.exports = Imagesacrifice;
