const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturetempleSchema = new Schema({

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
scripturetempleSchema.plugin(timestamps);
const Scripturetemple = mongoose.model('scripturetemple', scripturetempleSchema);

module.exports = Scripturetemple;
