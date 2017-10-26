const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturewomenSchema = new Schema({

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
scripturewomenSchema.plugin(timestamps);
const Scripturewomen = mongoose.model('scripturewomen', scripturewomenSchema);

module.exports = Scripturewomen;
