const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegodheadSchema = new Schema({

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
scripturegodheadSchema.plugin(timestamps);
const Scripturegodhead = mongoose.model('scripturegodhead', scripturegodheadSchema);

module.exports = Scripturegodhead;
