const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byuscripturesSchema = new Schema({

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
byuscripturesSchema.plugin(timestamps);
const Byuscriptures = mongoose.model('byuscriptures', byuscripturesSchema);

module.exports = Byuscriptures;
