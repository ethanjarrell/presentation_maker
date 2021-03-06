const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const talknameSchema = new Schema({

user: {
  type: String,
  ref: 'User',
},
talkid: {
  type: String,
  ref: 'Talkid',
},
talk_name: {
  type: String,
}
})
talknameSchema.plugin(timestamps);
const Talkname = mongoose.model('talkname', talknameSchema);

module.exports = Talkname;
