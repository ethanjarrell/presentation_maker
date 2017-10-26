const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureoldtestamentSchema = new Schema({

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
scriptureoldtestamentSchema.plugin(timestamps);
const Scriptureoldtestament = mongoose.model('scriptureoldtestament', scriptureoldtestamentSchema);

module.exports = Scriptureoldtestament;
