const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureobedienceSchema = new Schema({

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
scriptureobedienceSchema.plugin(timestamps);
const Scriptureobedience = mongoose.model('scriptureobedience', scriptureobedienceSchema);

module.exports = Scriptureobedience;
