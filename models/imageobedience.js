const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageobedienceSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageobedienceSchema.plugin(timestamps);
const Imageobedience = mongoose.model('imageobedience', imageobedienceSchema);

module.exports = Imageobedience;
