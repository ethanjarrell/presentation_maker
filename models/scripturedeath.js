const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturedeathSchema = new Schema({

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
scripturedeathSchema.plugin(timestamps);
const Scripturedeath = mongoose.model('scripturedeath', scripturedeathSchema);

module.exports = Scripturedeath;
