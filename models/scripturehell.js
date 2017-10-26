const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturehellSchema = new Schema({

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
scripturehellSchema.plugin(timestamps);
const Scripturehell = mongoose.model('scripturehell', scripturehellSchema);

module.exports = Scripturehell;
