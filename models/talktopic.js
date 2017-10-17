const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const talktopicSchema = new Schema({

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
  ref: 'Talkname',
},
talk_topic: {
  type: String,
},
})
talktopicSchema.plugin(timestamps);
const Talktopic = mongoose.model('talktopic', talktopicSchema);

module.exports = Talktopic;
