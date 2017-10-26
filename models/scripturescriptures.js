const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturescripturesSchema = new Schema({

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
scripturescripturesSchema.plugin(timestamps);
const Scripturescriptures = mongoose.model('scripturescriptures', scripturescripturesSchema);

module.exports = Scripturescriptures;
