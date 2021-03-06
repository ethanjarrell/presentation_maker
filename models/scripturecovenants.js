const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturecovenantsSchema = new Schema({

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
scripturecovenantsSchema.plugin(timestamps);
const Scripturecovenants = mongoose.model('scripturecovenants', scripturecovenantsSchema);

module.exports = Scripturecovenants;
