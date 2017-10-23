const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageselfrelianceSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageselfrelianceSchema.plugin(timestamps);
const Imageselfreliance = mongoose.model('imageselfreliance', imageselfrelianceSchema);

module.exports = Imageselfreliance;
