const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagewomenSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagewomenSchema.plugin(timestamps);
const Imagewomen = mongoose.model('imagewomen', imagewomenSchema);

module.exports = Imagewomen;
