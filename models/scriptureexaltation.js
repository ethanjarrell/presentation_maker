const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureexaltationSchema = new Schema({

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
scriptureexaltationSchema.plugin(timestamps);
const Scriptureexaltation = mongoose.model('scriptureexaltation', scriptureexaltationSchema);

module.exports = Scriptureexaltation;
