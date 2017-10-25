const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagepioneerSchema = new Schema({
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
imagepioneerSchema.plugin(timestamps);
const Imagepioneer = mongoose.model('imagepioneer', imagepioneerSchema);

module.exports = Imagepioneer;
