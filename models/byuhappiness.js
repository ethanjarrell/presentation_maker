const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuhappinessSchema = new Schema({

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
byuhappinessSchema.plugin(timestamps);
const Byuhappiness = mongoose.model('byuhappiness', byuhappinessSchema);

module.exports = Byuhappiness;
