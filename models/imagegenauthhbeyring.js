const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagegenauthhbeyringSchema = new Schema({

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
imagegenauthhbeyringSchema.plugin(timestamps);
const Imagegenauthhbeyring = mongoose.model('imagegenauthhbeyring', imagegenauthhbeyringSchema);

module.exports = Imagegenauthhbeyring;
