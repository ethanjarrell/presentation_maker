const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagemarriageSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagemarriageSchema.plugin(timestamps);
const Imagemarriage = mongoose.model('imagemarriage', imagemarriageSchema);

module.exports = Imagemarriage;
