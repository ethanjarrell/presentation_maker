const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagechurchSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagechurchSchema.plugin(timestamps);
const Imagechurch = mongoose.model('imagechurch', imagechurchSchema);

module.exports = Imagechurch;
