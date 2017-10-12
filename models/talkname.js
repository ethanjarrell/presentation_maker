const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const talknameSchema = new Schema({

user: {
  type: String,
  ref: 'User',
},
talk_name: {
  type: String,
},


})

const Talkname = mongoose.model('talkname', talknameSchema);

module.exports = Talkname;
