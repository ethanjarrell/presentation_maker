const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureselfrelianceSchema = new Schema({

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
scriptureselfrelianceSchema.plugin(timestamps);
const Scriptureselfreliance = mongoose.model('scriptureselfreliance', scriptureselfrelianceSchema);

module.exports = Scriptureselfreliance;
