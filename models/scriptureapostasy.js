const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scriptureapostasySchema = new Schema({

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
scriptureapostasySchema.plugin(timestamps);
const Scriptureapostasy = mongoose.model('scriptureapostasy', scriptureapostasySchema);

module.exports = Scriptureapostasy;
