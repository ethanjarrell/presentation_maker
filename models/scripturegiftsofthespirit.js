const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegiftsofthespiritSchema = new Schema({

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
scripturegiftsofthespiritSchema.plugin(timestamps);
const Scripturegiftsofthespirit = mongoose.model('scripturegiftsofthespirit', scripturegiftsofthespiritSchema);

module.exports = Scripturegiftsofthespirit;
