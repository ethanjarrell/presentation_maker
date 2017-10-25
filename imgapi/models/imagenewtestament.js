const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagenewtestamentSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagenewtestamentSchema.plugin(timestamps);
const Imagenewtestament = mongoose.model('imagenewtestament', imagenewtestamentSchema);

module.exports = Imagenewtestament;
