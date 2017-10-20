const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageholyghostSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageholyghostSchema.plugin(timestamps);
const Imageholyghost = mongoose.model('imageholyghost', imageholyghostSchema);

module.exports = Imageholyghost;
