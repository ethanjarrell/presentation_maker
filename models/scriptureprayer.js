const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureprayerSchema = new Schema({

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
scriptureprayerSchema.plugin(timestamps);
const Scriptureprayer = mongoose.model('scriptureprayer', scriptureprayerSchema);

module.exports = Scriptureprayer;
