const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byupremortalSchema = new Schema({

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
byupremortalSchema.plugin(timestamps);
const Byupremortal = mongoose.model('byupremortal', byupremortalSchema);

module.exports = Byupremortal;
