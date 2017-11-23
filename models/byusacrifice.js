const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byusacrificeSchema = new Schema({

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
byusacrificeSchema.plugin(timestamps);
const Byusacrifice = mongoose.model('byusacrifice', byusacrificeSchema);

module.exports = Byusacrifice;
