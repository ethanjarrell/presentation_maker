const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byupriesthoodSchema = new Schema({

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
byupriesthoodSchema.plugin(timestamps);
const Byupriesthood = mongoose.model('byupriesthood', byupriesthoodSchema);

module.exports = Byupriesthood;
