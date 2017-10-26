const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturechildrenSchema = new Schema({

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
scripturechildrenSchema.plugin(timestamps);
const Scripturechildren = mongoose.model('scripturechildren', scripturechildrenSchema);

module.exports = Scripturechildren;
