const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthdhoaksSchema = new Schema({

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
scripturegenauthdhoaksSchema.plugin(timestamps);
const Scripturegenauthdhoaks = mongoose.model('scripturegenauthdhoaks', scripturegenauthdhoaksSchema);

module.exports = Scripturegenauthdhoaks;
