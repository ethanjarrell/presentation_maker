const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byugiftsofthespiritSchema = new Schema({

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
byugiftsofthespiritSchema.plugin(timestamps);
const Byugiftsofthespirit = mongoose.model('byugiftsofthespirit', byugiftsofthespiritSchema);

module.exports = Byugiftsofthespirit;
