const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagesacramentSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagesacramentSchema.plugin(timestamps);
const Imagesacrament = mongoose.model('imagesacrament', imagesacramentSchema);

module.exports = Imagesacrament;
