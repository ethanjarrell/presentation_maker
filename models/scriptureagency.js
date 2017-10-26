const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureagencySchema = new Schema({

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
scriptureagencySchema.plugin(timestamps);
const Scriptureagency = mongoose.model('scriptureagency', scriptureagencySchema);

module.exports = Scriptureagency;
