const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagepioneerSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagepioneerSchema.plugin(timestamps);
const Imagepioneer = mongoose.model('imagepioneer', imagepioneerSchema);

module.exports = Imagepioneer;
