const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byumarriageSchema = new Schema({

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
byumarriageSchema.plugin(timestamps);
const Byumarriage = mongoose.model('byumarriage', byumarriageSchema);

module.exports = Byumarriage;
