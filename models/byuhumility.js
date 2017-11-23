const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuhumilitySchema = new Schema({

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
byuhumilitySchema.plugin(timestamps);
const Byuhumility = mongoose.model('byuhumility', byuhumilitySchema);

module.exports = Byuhumility;
