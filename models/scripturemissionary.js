const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturemissionarySchema = new Schema({

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
scripturemissionarySchema.plugin(timestamps);
const Scripturemissionary = mongoose.model('scripturemissionary', scripturemissionarySchema);

module.exports = Scripturemissionary;
