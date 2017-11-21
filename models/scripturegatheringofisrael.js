const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegatheringofisraelSchema = new Schema({

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
scripturegatheringofisraelSchema.plugin(timestamps);
const Scripturegatheringofisrael = mongoose.model('scripturegatheringofisrael', scripturegatheringofisraelSchema);

module.exports = Scripturegatheringofisrael;
