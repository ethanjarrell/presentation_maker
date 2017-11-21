const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturepatienceSchema = new Schema({

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
scripturepatienceSchema.plugin(timestamps);
const Scripturepatience = mongoose.model('scripturepatience', scripturepatienceSchema);

module.exports = Scripturepatience;
