const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureangelsSchema = new Schema({


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
scriptureangelsSchema.plugin(timestamps);
const Scriptureangels = mongoose.model('scriptureangels', scriptureangelsSchema);

module.exports = Scriptureangels;
