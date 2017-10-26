const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturetestimonySchema = new Schema({

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
scripturetestimonySchema.plugin(timestamps);
const Scripturetestimony = mongoose.model('scripturetestimony', scripturetestimonySchema);

module.exports = Scripturetestimony;
