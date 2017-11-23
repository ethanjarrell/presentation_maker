const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byugatheringofisraelSchema = new Schema({

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
byugatheringofisraelSchema.plugin(timestamps);
const Byugatheringofisrael = mongoose.model('byugatheringofisrael', byugatheringofisraelSchema);

module.exports = Byugatheringofisrael;
