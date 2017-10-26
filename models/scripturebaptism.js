const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturebaptismSchema = new Schema({

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
scripturebaptismSchema.plugin(timestamps);
const Scripturebaptism = mongoose.model('scripturebaptism', scripturebaptismSchema);

module.exports = Scripturebaptism;
