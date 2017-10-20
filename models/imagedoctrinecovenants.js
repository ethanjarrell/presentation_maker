const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagedoctrinecovenantsSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagedoctrinecovenantsSchema.plugin(timestamps);
const Imagedoctrinecovenants = mongoose.model('imagedoctrinecovenants', imagedoctrinecovenantsSchema);

module.exports = Imagedoctrinecovenants;
