const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagerepentenceSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagerepentenceSchema.plugin(timestamps);
const Imagerepentence = mongoose.model('imagerepentence', imagerepentenceSchema);

module.exports = Imagerepentence;
