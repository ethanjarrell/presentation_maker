const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuholyghostSchema = new Schema({

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
byuholyghostSchema.plugin(timestamps);
const Byuholyghost = mongoose.model('byuholyghost', byuholyghostSchema);

module.exports = Byuholyghost;
