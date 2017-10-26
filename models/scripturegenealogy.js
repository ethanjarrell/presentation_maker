const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenealogySchema = new Schema({

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
scripturegenealogySchema.plugin(timestamps);
const Scripturegenealogy = mongoose.model('scripturegenealogy', scripturegenealogySchema);

module.exports = Scripturegenealogy;
