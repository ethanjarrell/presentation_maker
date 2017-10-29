const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthhbeyringSchema = new Schema({

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
scripturegenauthhbeyringSchema.plugin(timestamps);
const Scripturegenauthhbeyring = mongoose.model('scripturegenauthhbeyring', scripturegenauthhbeyringSchema);

module.exports = Scripturegenauthhbeyring;
