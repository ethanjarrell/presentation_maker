const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byusecondcomingSchema = new Schema({

  talk_name: {
    type: String,
  },
  talk_author: {
    type: String,
  },
  talk_author_title: {
    type: String,
  },
  talk_date: {
    type: String,
  },
  talk_text: {
    type: String,
  },

})
byusecondcomingSchema.plugin(timestamps);
const Byusecondcoming = mongoose.model('byusecondcoming', byusecondcomingSchema);

module.exports = Byusecondcoming;
