const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturetithingSchema = new Schema({

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
scripturetithingSchema.plugin(timestamps);
const Scripturetithing = mongoose.model('scripturetithing', scripturetithingSchema);

module.exports = Scripturetithing;
