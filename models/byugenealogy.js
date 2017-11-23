const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const byugenealogySchema = new Schema({

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
byugenealogySchema.plugin(timestamps);
const Byugenealogy = mongoose.model('byugenealogy', byugenealogySchema);

module.exports = Byugenealogy;
