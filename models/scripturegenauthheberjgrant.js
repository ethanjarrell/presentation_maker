const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthheberjgrantSchema = new Schema({

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
scripturegenauthheberjgrantSchema.plugin(timestamps);
const Scripturegenauthheberjgrant = mongoose.model('scripturegenauthheberjgrant', scripturegenauthheberjgrantSchema);

module.exports = Scripturegenauthheberjgrant;
