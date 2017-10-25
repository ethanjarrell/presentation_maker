const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageoldtestamentSchema = new Schema({
  standard_work_location: {
    type: String,
  },
  scripture: [{
    book_and_verse_number: {
      type: String,
    },
    verse_text: {
      type: String,
    },
  }],
image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imageoldtestamentSchema.plugin(timestamps);
const Imageoldtestament = mongoose.model('imageoldtestament', imageoldtestamentSchema);

module.exports = Imageoldtestament;
