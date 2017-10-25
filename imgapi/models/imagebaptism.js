const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagebaptismSchema = new Schema({
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
imagebaptismSchema.plugin(timestamps);
const Imagebaptism = mongoose.model('imagebaptism', imagebaptismSchema);

module.exports = Imagebaptism;
