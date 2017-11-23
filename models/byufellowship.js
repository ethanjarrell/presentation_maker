const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byufellowshipSchema = new Schema({

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
byufellowshipSchema.plugin(timestamps);
const Byufellowship = mongoose.model('byufellowship', byufellowshipSchema);

module.exports = Byufellowship;
