const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageangelsSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageangelsSchema.plugin(timestamps);
const Imageangels = mongoose.model('imageangels', imageangelsSchema);

module.exports = Imageangels;
