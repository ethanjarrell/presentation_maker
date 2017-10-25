const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagesecondcomingSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagesecondcomingSchema.plugin(timestamps);
const Imagesecondcoming = mongoose.model('imagesecondcoming', imagesecondcomingSchema);

module.exports = Imagesecondcoming;
