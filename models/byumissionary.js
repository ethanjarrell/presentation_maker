const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byumissionarySchema = new Schema({

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
byumissionarySchema.plugin(timestamps);
const Byumissionary = mongoose.model('byumissionary', byumissionarySchema);

module.exports = Byumissionary;
