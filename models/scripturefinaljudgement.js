const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturefinaljudgementSchema = new Schema({

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
scripturefinaljudgementSchema.plugin(timestamps);
const Scripturefinaljudgement = mongoose.model('scripturefinaljudgement', scripturefinaljudgementSchema);

module.exports = Scripturefinaljudgement;
