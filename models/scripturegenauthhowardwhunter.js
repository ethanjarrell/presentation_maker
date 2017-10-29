const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthhowardwhunterSchema = new Schema({

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
scripturegenauthhowardwhunterSchema.plugin(timestamps);
const Scripturegenauthhowardwhunter = mongoose.model('scripturegenauthhowardwhunter', scripturegenauthhowardwhunterSchema);

module.exports = Scripturegenauthhowardwhunter;
