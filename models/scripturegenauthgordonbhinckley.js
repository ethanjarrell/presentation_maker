const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthgordonbhinckleySchema = new Schema({

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
scripturegenauthgordonbhinckleySchema.plugin(timestamps);
const Scripturegenauthgordonbhinckley = mongoose.model('scripturegenauthgordonbhinckley', scripturegenauthgordonbhinckleySchema);

module.exports = Scripturegenauthgordonbhinckley;
