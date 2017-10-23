const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageprayerSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageprayerSchema.plugin(timestamps);
const Imageprayer = mongoose.model('imageprayer', imageprayerSchema);

module.exports = Imageprayer;
