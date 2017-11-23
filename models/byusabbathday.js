const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byusabbathdaySchema = new Schema({

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
byusabbathdaySchema.plugin(timestamps);
const Byusabbathday = mongoose.model('byusabbathday', byusabbathdaySchema);

module.exports = Byusabbathday;
