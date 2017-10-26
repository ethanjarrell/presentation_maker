const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegodSchema = new Schema({

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
scripturegodSchema.plugin(timestamps);
const Scripturegod = mongoose.model('scripturegod', scripturegodSchema);

module.exports = Scripturegod;
