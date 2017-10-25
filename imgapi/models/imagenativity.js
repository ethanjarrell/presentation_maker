const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagenativitySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagenativitySchema.plugin(timestamps);
const Imagenativity = mongoose.model('imagenativity', imagenativitySchema);

module.exports = Imagenativity;
