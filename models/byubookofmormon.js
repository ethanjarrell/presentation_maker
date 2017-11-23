const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byubookofmormonSchema = new Schema({

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
byubookofmormonSchema.plugin(timestamps);
const Byubookofmormon = mongoose.model('byubookofmormon', byubookofmormonSchema);

module.exports = Byubookofmormon;
