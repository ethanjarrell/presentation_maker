const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagetempleSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagetempleSchema.plugin(timestamps);
const Imagetemple = mongoose.model('imagetemple', imagetempleSchema);

module.exports = Imagetemple;
