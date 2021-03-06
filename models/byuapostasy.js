const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuapostasySchema = new Schema({

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
byuapostasySchema.plugin(timestamps);
const Byuapostasy = mongoose.model('byuapostasy', byuapostasySchema);

module.exports = Byuapostasy;
