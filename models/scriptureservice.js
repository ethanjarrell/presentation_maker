const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureserviceSchema = new Schema({

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
scriptureserviceSchema.plugin(timestamps);
const Scriptureservice = mongoose.model('scriptureservice', scriptureserviceSchema);

module.exports = Scriptureservice;
