const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuhonestySchema = new Schema({

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
byuhonestySchema.plugin(timestamps);
const Byuhonesty = mongoose.model('byuhonesty', byuhonestySchema);

module.exports = Byuhonesty;
