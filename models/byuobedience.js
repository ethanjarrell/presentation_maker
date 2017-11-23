const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuobedienceSchema = new Schema({

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
byuobedienceSchema.plugin(timestamps);
const Byuobedience = mongoose.model('byuobedience', byuobedienceSchema);

module.exports = Byuobedience;
