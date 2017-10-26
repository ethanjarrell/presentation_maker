const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturenewtestamentSchema = new Schema({

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
scripturenewtestamentSchema.plugin(timestamps);
const Scripturenewtestament = mongoose.model('scripturenewtestament', scripturenewtestamentSchema);

module.exports = Scripturenewtestament;
