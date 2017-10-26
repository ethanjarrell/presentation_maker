const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturesacramentSchema = new Schema({

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
scripturesacramentSchema.plugin(timestamps);
const Scripturesacrament = mongoose.model('scripturesacrament', scripturesacramentSchema);

module.exports = Scripturesacrament;
