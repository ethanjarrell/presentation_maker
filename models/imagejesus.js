const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagejesusSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagejesusSchema.plugin(timestamps);
const Imagejesus = mongoose.model('imagejesus', imagejesusSchema);

module.exports = Imagejesus;
