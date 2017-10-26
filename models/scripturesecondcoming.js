const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturesecondcomingSchema = new Schema({

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
scripturesecondcomingSchema.plugin(timestamps);
const Scripturesecondcoming = mongoose.model('scripturesecondcoming', scripturesecondcomingSchema);

module.exports = Scripturesecondcoming;
