const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureholyghostSchema = new Schema({

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
scriptureholyghostSchema.plugin(timestamps);
const Scriptureholyghost = mongoose.model('scriptureholyghost', scriptureholyghostSchema);

module.exports = Scriptureholyghost;
