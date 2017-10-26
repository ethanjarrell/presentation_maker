const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturemiraclesSchema = new Schema({

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
scripturemiraclesSchema.plugin(timestamps);
const Scripturemiracles = mongoose.model('scripturemiracles', scripturemiraclesSchema);

module.exports = Scripturemiracles;
