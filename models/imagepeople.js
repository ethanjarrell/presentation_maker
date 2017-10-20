const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagepeopleSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagepeopleSchema.plugin(timestamps);
const Imagepeople = mongoose.model('imagepeople', imagepeopleSchema);

module.exports = Imagepeople;
