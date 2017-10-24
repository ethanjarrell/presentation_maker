const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagegiftsofthespiritSchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagegiftsofthespiritSchema.plugin(timestamps);
const Imagegiftsofthespirit = mongoose.model('imagegiftsofthespirit', imagegiftsofthespiritSchema);

module.exports = Imagegiftsofthespirit;
