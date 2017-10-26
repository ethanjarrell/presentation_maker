const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturehonestySchema = new Schema({

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
scripturehonestySchema.plugin(timestamps);
const Scripturehonesty = mongoose.model('scripturehonesty', scripturehonestySchema);

module.exports = Scripturehonesty;
