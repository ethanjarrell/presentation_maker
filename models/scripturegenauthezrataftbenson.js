const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthezrataftbensonSchema = new Schema({

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
scripturegenauthezrataftbensonSchema.plugin(timestamps);
const Scripturegenauthezrataftbenson = mongoose.model('scripturegenauthezrataftbenson', scripturegenauthezrataftbensonSchema);

module.exports = Scripturegenauthezrataftbenson;
