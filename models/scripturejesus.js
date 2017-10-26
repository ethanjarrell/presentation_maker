const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturejesusSchema = new Schema({

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
scripturejesusSchema.plugin(timestamps);
const Scripturejesus = mongoose.model('scripturejesus', scripturejesusSchema);

module.exports = Scripturejesus;
