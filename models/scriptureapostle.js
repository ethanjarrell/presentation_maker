const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureapostleSchema = new Schema({

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
scriptureapostleSchema.plugin(timestamps);
const Scriptureapostle = mongoose.model('scriptureapostle', scriptureapostleSchema);

module.exports = Scriptureapostle;
