const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureeventsSchema = new Schema({

  standard_work_location: {
    type: String,
  },
    book_and_verse_number: {
      type: String,
    },
    verse_text: {
      type: String,
    },



})
scriptureeventsSchema.plugin(timestamps);
const Scriptureevents = mongoose.model('scriptureevents', scriptureeventsSchema);

module.exports = Scriptureevents;
