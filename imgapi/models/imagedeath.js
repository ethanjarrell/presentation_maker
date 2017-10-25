const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagedeathSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagedeathSchema.plugin(timestamps);
const Imagedeath = mongoose.model('imagedeath', imagedeathSchema);

module.exports = Imagedeath;
