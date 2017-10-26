const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturecharitySchema = new Schema({

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
scripturecharitySchema.plugin(timestamps);
const Scripturecharity = mongoose.model('scripturecharity', scripturecharitySchema);

module.exports = Scripturecharity;
