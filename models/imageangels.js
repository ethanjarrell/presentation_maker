const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageangelsSchema = new Schema({
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
imageangelsSchema.plugin(timestamps);
const Imageangels = mongoose.model('imageangels', imageangelsSchema);

module.exports = Imageangels;
