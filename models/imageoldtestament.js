const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageoldtestamentSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageoldtestamentSchema.plugin(timestamps);
const Imageoldtestament = mongoose.model('imageoldtestament', imageoldtestamentSchema);

module.exports = Imageoldtestament;
