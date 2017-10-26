const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturepeopleSchema = new Schema({

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
scripturepeopleSchema.plugin(timestamps);
const Scripturepeople = mongoose.model('scripturepeople', scripturepeopleSchema);

module.exports = Scripturepeople;
