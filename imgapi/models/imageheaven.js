const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageheavenSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageheavenSchema.plugin(timestamps);
const Imageheaven = mongoose.model('imageheaven', imageheavenSchema);

module.exports = Imageheaven;
