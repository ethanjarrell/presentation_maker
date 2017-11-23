const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byugratitudeSchema = new Schema({

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
byugratitudeSchema.plugin(timestamps);
const Byugratitude = mongoose.model('byugratitude', byugratitudeSchema);

module.exports = Byugratitude;
