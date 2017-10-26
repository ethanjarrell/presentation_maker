const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturenativitySchema = new Schema({

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
scripturenativitySchema.plugin(timestamps);
const Scripturenativity = mongoose.model('scripturenativity', scripturenativitySchema);

module.exports = Scripturenativity;
