const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagecovenantsSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagecovenantsSchema.plugin(timestamps);
const Imagecovenants = mongoose.model('imagecovenants', imagecovenantsSchema);

module.exports = Imagecovenants;
