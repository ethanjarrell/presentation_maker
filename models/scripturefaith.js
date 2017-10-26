const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturefaithSchema = new Schema({

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
scripturefaithSchema.plugin(timestamps);
const Scripturefaith = mongoose.model('scripturefaith', scripturefaithSchema);

module.exports = Scripturefaith;
