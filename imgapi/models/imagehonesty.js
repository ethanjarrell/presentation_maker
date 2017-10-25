const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagehonestySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagehonestySchema.plugin(timestamps);
const Imagehonesty = mongoose.model('imagehonesty', imagehonestySchema);

module.exports = Imagehonesty;
