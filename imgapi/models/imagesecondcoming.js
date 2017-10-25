const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagesecondcomingSchema = new Schema({
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
imagesecondcomingSchema.plugin(timestamps);
const Imagesecondcoming = mongoose.model('imagesecondcoming', imagesecondcomingSchema);

module.exports = Imagesecondcoming;
