const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturetalentsSchema = new Schema({

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
scripturetalentsSchema.plugin(timestamps);
const Scripturetalents = mongoose.model('scripturetalents', scripturetalentsSchema);

module.exports = Scripturetalents;
