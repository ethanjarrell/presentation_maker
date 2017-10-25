const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageserviceSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageserviceSchema.plugin(timestamps);
const Imageservice = mongoose.model('imageservice', imageserviceSchema);

module.exports = Imageservice;
