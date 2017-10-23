const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageapostleSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageapostleSchema.plugin(timestamps);
const Imageapostle = mongoose.model('imageapostle', imageapostleSchema);

module.exports = Imageapostle;
