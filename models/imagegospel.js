const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagegospelSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagegospelSchema.plugin(timestamps);
const Imagegospel = mongoose.model('imagegospel', imagegospelSchema);

module.exports = Imagegospel;
