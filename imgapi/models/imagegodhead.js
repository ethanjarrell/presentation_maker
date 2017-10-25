const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagegodheadSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagegodheadSchema.plugin(timestamps);
const Imagegodhead = mongoose.model('imagegodhead', imagegodheadSchema);

module.exports = Imagegodhead;
