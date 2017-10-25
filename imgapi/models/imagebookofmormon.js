const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagebookofmormonSchema = new Schema({
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
imagebookofmormonSchema.plugin(timestamps);
const Imagebookofmormon = mongoose.model('imagebookofmormon', imagebookofmormonSchema);

module.exports = Imagebookofmormon;
