const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagehumilitySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagehumilitySchema.plugin(timestamps);
const Imagehumility = mongoose.model('imagehumility', imagehumilitySchema);

module.exports = Imagehumility;
