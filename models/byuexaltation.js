const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuexaltationSchema = new Schema({

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
byuexaltationSchema.plugin(timestamps);
const Byuexaltation = mongoose.model('byuexaltation', byuexaltationSchema);

module.exports = Byuexaltation;
