const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureprophetsSchema = new Schema({

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
scriptureprophetsSchema.plugin(timestamps);
const Scriptureprophets = mongoose.model('scriptureprophets', scriptureprophetsSchema);

module.exports = Scriptureprophets;
