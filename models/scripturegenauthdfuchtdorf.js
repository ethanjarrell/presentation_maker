const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthdfuchtdorfSchema = new Schema({

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
scripturegenauthdfuchtdorfSchema.plugin(timestamps);
const Scripturegenauthdfuchtdorf = mongoose.model('scripturegenauthdfuchtdorf', scripturegenauthdfuchtdorfSchema);

module.exports = Scripturegenauthdfuchtdorf;
