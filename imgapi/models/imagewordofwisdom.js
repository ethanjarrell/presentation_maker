const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagewordofwisdomSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagewordofwisdomSchema.plugin(timestamps);
const Imagewordofwisdom = mongoose.model('imagewordofwisdom', imagewordofwisdomSchema);

module.exports = Imagewordofwisdom;
