const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageheavenlyfatherSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageheavenlyfatherSchema.plugin(timestamps);
const Imageheavenlyfather = mongoose.model('imageheavenlyfather', imageheavenlyfatherSchema);

module.exports = Imageheavenlyfather;
