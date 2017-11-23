const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuwordofwisdomSchema = new Schema({

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
byuwordofwisdomSchema.plugin(timestamps);
const Byuwordofwisdom = mongoose.model('byuwordofwisdom', byuwordofwisdomSchema);

module.exports = Byuwordofwisdom;
