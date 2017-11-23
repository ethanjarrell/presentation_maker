const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byufinaljudgementSchema = new Schema({

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
byufinaljudgementSchema.plugin(timestamps);
const Byufinaljudgement = mongoose.model('byufinaljudgement', byufinaljudgementSchema);

module.exports = Byufinaljudgement;
