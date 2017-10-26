const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturehappinessSchema = new Schema({

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
scripturehappinessSchema.plugin(timestamps);
const Scripturehappiness = mongoose.model('scripturehappiness', scripturehappinessSchema);

module.exports = Scripturehappiness;
