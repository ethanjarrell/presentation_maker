const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuchildrenSchema = new Schema({

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
byuchildrenSchema.plugin(timestamps);
const Byuchildren = mongoose.model('byuchildren', byuchildrenSchema);

module.exports = Byuchildren;
