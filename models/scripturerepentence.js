const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturerepentenceSchema = new Schema({

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
scripturerepentenceSchema.plugin(timestamps);
const Scripturerepentence = mongoose.model('scripturerepentence', scripturerepentenceSchema);

module.exports = Scripturerepentence;
