const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagepremortalSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagepremortalSchema.plugin(timestamps);
const Imagepremortal = mongoose.model('imagepremortal', imagepremortalSchema);

module.exports = Imagepremortal;
