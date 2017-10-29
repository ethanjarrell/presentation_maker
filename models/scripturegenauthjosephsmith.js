const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthjosephsmithSchema = new Schema({

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
scripturegenauthjosephsmithSchema.plugin(timestamps);
const Scripturegenauthjosephsmith = mongoose.model('scripturegenauthjosephsmith', scripturegenauthjosephsmithSchema);

module.exports = Scripturegenauthjosephsmith;
