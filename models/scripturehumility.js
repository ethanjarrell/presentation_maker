const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturehumilitySchema = new Schema({

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
scripturehumilitySchema.plugin(timestamps);
const Scripturehumility = mongoose.model('scripturehumility', scripturehumilitySchema);

module.exports = Scripturehumility;
