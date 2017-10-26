const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureresurrectionSchema = new Schema({

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
scriptureresurrectionSchema.plugin(timestamps);
const Scriptureresurrection = mongoose.model('scriptureresurrection', scriptureresurrectionSchema);

module.exports = Scriptureresurrection;
