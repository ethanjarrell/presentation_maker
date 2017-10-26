const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturechastitySchema = new Schema({

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
scripturechastitySchema.plugin(timestamps);
const Scripturechastity = mongoose.model('scripturechastity', scripturechastitySchema);

module.exports = Scripturechastity;
