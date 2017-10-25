const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagefamilySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagefamilySchema.plugin(timestamps);
const Imagefamily = mongoose.model('imagefamily', imagefamilySchema);

module.exports = Imagefamily;
