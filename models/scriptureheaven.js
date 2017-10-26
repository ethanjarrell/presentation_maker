const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureheavenSchema = new Schema({

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
scriptureheavenSchema.plugin(timestamps);
const Scriptureheaven = mongoose.model('scriptureheaven', scriptureheavenSchema);

module.exports = Scriptureheaven;
