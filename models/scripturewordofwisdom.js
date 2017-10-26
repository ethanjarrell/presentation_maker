const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturewordofwisdomSchema = new Schema({

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
scripturewordofwisdomSchema.plugin(timestamps);
const Scripturewordofwisdom = mongoose.model('scripturewordofwisdom', scripturewordofwisdomSchema);

module.exports = Scripturewordofwisdom;
