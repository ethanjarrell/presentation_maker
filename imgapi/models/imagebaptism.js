const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagebaptismSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagebaptismSchema.plugin(timestamps);
const Imagebaptism = mongoose.model('imagebaptism', imagebaptismSchema);

module.exports = Imagebaptism;
