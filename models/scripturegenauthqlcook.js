const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthqlcookSchema = new Schema({

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
scripturegenauthqlcookSchema.plugin(timestamps);
const Scripturegenauthqlcook = mongoose.model('scripturegenauthqlcook', scripturegenauthqlcookSchema);

module.exports = Scripturegenauthqlcook;
