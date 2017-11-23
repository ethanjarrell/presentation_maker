const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byufastingSchema = new Schema({

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
byufastingSchema.plugin(timestamps);
const Byufasting = mongoose.model('byufasting', byufastingSchema);

module.exports = Byufasting;
