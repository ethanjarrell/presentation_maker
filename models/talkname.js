const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const talknameSchema = new Schema({

user: {
  type: String,
  ref: 'User',
},
talk_name: {
  type: mongoose.Schema.Types.Mixed,
},


})

const Talkname = mongoose.model('talkname', talknameSchema);

module.exports = Talkname;
