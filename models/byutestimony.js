const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byutestimonySchema = new Schema({

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
byutestimonySchema.plugin(timestamps);
const Byutestimony = mongoose.model('byutestimony', byutestimonySchema);

module.exports = Byutestimony;
