const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturefamilySchema = new Schema({

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
scripturefamilySchema.plugin(timestamps);
const Scripturefamily = mongoose.model('scripturefamily', scripturefamilySchema);

module.exports = Scripturefamily;
