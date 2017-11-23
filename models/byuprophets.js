const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuprophetsSchema = new Schema({

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
byuprophetsSchema.plugin(timestamps);
const Byuprophets = mongoose.model('byuprophets', byuprophetsSchema);

module.exports = Byuprophets;
