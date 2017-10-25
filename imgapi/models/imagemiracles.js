const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagemicarclesSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagemicarclesSchema.plugin(timestamps);
const Imagemicarcles = mongoose.model('imagemicarcles', imagemicarclesSchema);

module.exports = Imagemicarcles;
