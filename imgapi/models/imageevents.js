const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imageeventsSchema = new Schema({
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
imageeventsSchema.plugin(timestamps);
const Imageevents = mongoose.model('imageevents', imageeventsSchema);

module.exports = Imageevents;
