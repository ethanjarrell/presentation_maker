const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturepremortalSchema = new Schema({

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
scripturepremortalSchema.plugin(timestamps);
const Scripturepremortal = mongoose.model('scripturepremortal', scripturepremortalSchema);

module.exports = Scripturepremortal;
