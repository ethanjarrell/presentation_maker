const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byumiraclesSchema = new Schema({

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
byumiraclesSchema.plugin(timestamps);
const Byumiracles = mongoose.model('byumiracles', byumiraclesSchema);

module.exports = Byumiracles;
