const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageagencySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageagencySchema.plugin(timestamps);
const Imageagency = mongoose.model('imageagency', imageagencySchema);

module.exports = Imageagency;
