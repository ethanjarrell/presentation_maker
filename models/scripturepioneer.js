const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturepioneerSchema = new Schema({

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
scripturepioneerSchema.plugin(timestamps);
const Scripturepioneer = mongoose.model('scripturepioneer', scripturepioneerSchema);

module.exports = Scripturepioneer;
