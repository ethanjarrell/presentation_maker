const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagetrialsSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagetrialsSchema.plugin(timestamps);
const Imagetrials = mongoose.model('imagetrials', imagetrialsSchema);

module.exports = Imagetrials;
