const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturefellowshipSchema = new Schema({

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
scripturefellowshipSchema.plugin(timestamps);
const Scripturefellowship = mongoose.model('scripturefellowship', scripturefellowshipSchema);

module.exports = Scripturefellowship;
