const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegratitudeSchema = new Schema({

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
scripturegratitudeSchema.plugin(timestamps);
const Scripturegratitude = mongoose.model('scripturegratitude', scripturegratitudeSchema);

module.exports = Scripturegratitude;
