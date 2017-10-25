const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagehappinessSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagehappinessSchema.plugin(timestamps);
const Imagehappiness = mongoose.model('imagehappiness', imagehappinessSchema);

module.exports = Imagehappiness;
