const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagebookofmormonSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagebookofmormonSchema.plugin(timestamps);
const Imagebookofmormon = mongoose.model('imagebookofmormon', imagebookofmormonSchema);

module.exports = Imagebookofmormon;
