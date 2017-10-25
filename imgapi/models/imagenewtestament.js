const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagenewtestamentSchema = new Schema({
  image_data: [{
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
    tag: [{
      type: String,
    }],
    image: {
      type: String,
    },
  }],


})
imagenewtestamentSchema.plugin(timestamps);
const Imagenewtestament = mongoose.model('imagenewtestament', imagenewtestamentSchema);

module.exports = Imagenewtestament;
