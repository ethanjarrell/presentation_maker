const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturebookofmormonSchema = new Schema({

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
scripturebookofmormonSchema.plugin(timestamps);
const Scripturebookofmormon = mongoose.model('scripturebookofmormon', scripturebookofmormonSchema);

module.exports = Scripturebookofmormon;
