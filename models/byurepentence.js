const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byurepentenceSchema = new Schema({

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
byurepentenceSchema.plugin(timestamps);
const Byurepentence = mongoose.model('byurepentence', byurepentenceSchema);

module.exports = Byurepentence;
