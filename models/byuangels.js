const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuangelsSchema = new Schema({

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
byuangelsSchema.plugin(timestamps);
const Byuangels = mongoose.model('byuangels', byuangelsSchema);

module.exports = Byuangels;
