const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturedoctrinecovenantsSchema = new Schema({

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
scripturedoctrinecovenantsSchema.plugin(timestamps);
const Scripturedoctrinecovenants = mongoose.model('scripturedoctrinecovenants', scripturedoctrinecovenantsSchema);

module.exports = Scripturedoctrinecovenants;
