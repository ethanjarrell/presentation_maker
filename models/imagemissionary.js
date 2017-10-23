const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagemissionarySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagemissionarySchema.plugin(timestamps);
const Imagemissionary = mongoose.model('imagemissionary', imagemissionarySchema);

module.exports = Imagemissionary;
