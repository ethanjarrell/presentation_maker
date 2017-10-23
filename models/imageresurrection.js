const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageresurrectionSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageresurrectionSchema.plugin(timestamps);
const Imageresurrection = mongoose.model('imageresurrection', imageresurrectionSchema);

module.exports = Imageresurrection;
