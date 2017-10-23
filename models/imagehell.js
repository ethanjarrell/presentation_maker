const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagehellSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagehellSchema.plugin(timestamps);
const Imagehell = mongoose.model('imagehell', imagehellSchema);

module.exports = Imagehell;
