const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturechurchSchema = new Schema({

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
scripturechurchSchema.plugin(timestamps);
const Scripturechurch = mongoose.model('scripturechurch', scripturechurchSchema);

module.exports = Scripturechurch;
