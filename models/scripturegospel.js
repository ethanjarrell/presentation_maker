const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegospelSchema = new Schema({

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
scripturegospelSchema.plugin(timestamps);
const Scripturegospel = mongoose.model('scripturegospel', scripturegospelSchema);

module.exports = Scripturegospel;
