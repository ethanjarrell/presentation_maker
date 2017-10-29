const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthtsmonsonSchema = new Schema({

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
scripturegenauthtsmonsonSchema.plugin(timestamps);
const Scripturegenauthtsmonson = mongoose.model('scripturegenauthtsmonson', scripturegenauthtsmonsonSchema);

module.exports = Scripturegenauthtsmonson;
