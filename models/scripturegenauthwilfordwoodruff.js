const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthwilfordwoodruffSchema = new Schema({

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
scripturegenauthwilfordwoodruffSchema.plugin(timestamps);
const Scripturegenauthwilfordwoodruff = mongoose.model('scripturegenauthwilfordwoodruff', scripturegenauthwilfordwoodruffSchema);

module.exports = Scripturegenauthwilfordwoodruff;
