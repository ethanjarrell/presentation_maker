const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byulordscovenantpeopleSchema = new Schema({

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
byulordscovenantpeopleSchema.plugin(timestamps);
const Byulordscovenantpeople = mongoose.model('byulordscovenantpeople', byulordscovenantpeopleSchema);

module.exports = Byulordscovenantpeople;
