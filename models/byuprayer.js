const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuprayerSchema = new Schema({

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
byuprayerSchema.plugin(timestamps);
const Byuprayer = mongoose.model('byuprayer', byuprayerSchema);

module.exports = Byuprayer;
