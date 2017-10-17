const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const talkSchema = new Schema({

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
  ref: 'Talktopic',
},
section1_topic: [{
  type: String,
}],
topic1: [{
  type: String,
}],
textarea1: [{
  type: String,
}],
topic2: [{
  type: String,
}],
textarea2: [{
  type: String,
}],
topic3: [{
  type: String,
}],
textarea3: [{
  type: String,
}],
topic4: [{
  type: String,
}],
textarea4: [{
  type: String,
}],
topic5: [{
  type: String,
}],
textarea5: [{
  type: String,
}],
topic6: [{
  type: String,
}],
textarea6: [{
  type: String,
}],
topic7: [{
  type: String,
}],
textarea7: [{
  type: String,
}],
topic8: [{
  type: String,
}],
textarea8: [{
  type: String,
}],
topic9: [{
  type: String,
}],
textarea9: [{
  type: String,
}],
topic10: [{
  type: String,
}],
textarea10: [{
  type: String,
}],
time: {
  type : Date,
  default: Date.now,
},


})
talkSchema.plugin(timestamps);
const Talk = mongoose.model('talk', talkSchema);

module.exports = Talk;
