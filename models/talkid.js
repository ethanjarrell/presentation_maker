const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const talkidSchema = new Schema({

user: {
  type: String,
  ref: 'User',
},
talkid: {
  type: Schema.Types.Mixed,
},


})
talkidSchema.plugin(timestamps);
const Talkid = mongoose.model('talkid', talkidSchema);

module.exports = Talkid;
