const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturemarriageSchema = new Schema({

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
scripturemarriageSchema.plugin(timestamps);
const Scripturemarriage = mongoose.model('scripturemarriage', scripturemarriageSchema);

module.exports = Scripturemarriage;
