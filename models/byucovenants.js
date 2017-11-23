const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byucovenantsSchema = new Schema({

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
byucovenantsSchema.plugin(timestamps);
const Byucovenants = mongoose.model('byucovenants', byucovenantsSchema);

module.exports = Byucovenants;
