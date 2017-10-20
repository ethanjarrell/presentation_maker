const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageprophetsSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageprophetsSchema.plugin(timestamps);
const Imageprophets = mongoose.model('imageprophets', imageprophetsSchema);

module.exports = Imageprophets;
