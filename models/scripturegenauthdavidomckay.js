const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthdavidomckaySchema = new Schema({

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
scripturegenauthdavidomckaySchema.plugin(timestamps);
const Scripturegenauthdavidomckay = mongoose.model('scripturegenauthdavidomckay', scripturegenauthdavidomckaySchema);

module.exports = Scripturegenauthdavidomckay;
