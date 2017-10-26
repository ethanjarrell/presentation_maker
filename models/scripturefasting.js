const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturefastingSchema = new Schema({

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
scripturefastingSchema.plugin(timestamps);
const Scripturefasting = mongoose.model('scripturefasting', scripturefastingSchema);

module.exports = Scripturefasting;
