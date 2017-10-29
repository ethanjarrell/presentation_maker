const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthharoldbleeSchema = new Schema({

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
scripturegenauthharoldbleeSchema.plugin(timestamps);
const Scripturegenauthharoldblee = mongoose.model('scripturegenauthharoldblee', scripturegenauthharoldbleeSchema);

module.exports = Scripturegenauthharoldblee;
