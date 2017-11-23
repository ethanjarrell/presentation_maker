const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuresurrectionSchema = new Schema({

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
byuresurrectionSchema.plugin(timestamps);
const Byuresurrection = mongoose.model('byuresurrection', byuresurrectionSchema);

module.exports = Byuresurrection;
