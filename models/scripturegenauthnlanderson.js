const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthnlandersonSchema = new Schema({

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
scripturegenauthnlandersonSchema.plugin(timestamps);
const Scripturegenauthnlanderson = mongoose.model('scripturegenauthnlanderson', scripturegenauthnlandersonSchema);

module.exports = Scripturegenauthnlanderson;
