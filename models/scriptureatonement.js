const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureatonementSchema = new Schema({

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
scriptureatonementSchema.plugin(timestamps);
const Scriptureatonement = mongoose.model('scriptureatonement', scriptureatonementSchema);

module.exports = Scriptureatonement;
