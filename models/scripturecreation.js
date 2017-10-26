const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturecreationSchema = new Schema({

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
scripturecreationSchema.plugin(timestamps);
const Scripturecreation = mongoose.model('scripturecreation', scripturecreationSchema);

module.exports = Scripturecreation;
