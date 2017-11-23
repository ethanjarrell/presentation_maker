const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byupioneerSchema = new Schema({

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
byupioneerSchema.plugin(timestamps);
const Byupioneer = mongoose.model('byupioneer', byupioneerSchema);

module.exports = Byupioneer;
