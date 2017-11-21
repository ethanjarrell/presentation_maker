const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturesacrificeSchema = new Schema({

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
scripturesacrificeSchema.plugin(timestamps);
const Scripturesacrifice = mongoose.model('scripturesacrifice', scripturesacrificeSchema);

module.exports = Scripturesacrifice;
