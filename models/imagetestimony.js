const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagetestimonySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagetestimonySchema.plugin(timestamps);
const Imagetestimony = mongoose.model('imagetestimony', imagetestimonySchema);

module.exports = Imagetestimony;
