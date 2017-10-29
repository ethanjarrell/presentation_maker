const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthjrhollandSchema = new Schema({

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
scripturegenauthjrhollandSchema.plugin(timestamps);
const Scripturegenauthjrholland = mongoose.model('scripturegenauthjrholland', scripturegenauthjrhollandSchema);

module.exports = Scripturegenauthjrholland;
