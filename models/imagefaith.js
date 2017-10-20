const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagefaithSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagefaithSchema.plugin(timestamps);
const Imagefaith = mongoose.model('imagefaith', imagefaithSchema);

module.exports = Imagefaith;
