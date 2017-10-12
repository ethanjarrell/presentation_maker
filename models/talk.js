const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const talkSchema = new Schema({

talk_topic: {
  type: String,
},
section1_topic: {
  type: String,
},
topic1: {
  type: String,
},
textarea1: {
  type: String,
},
topic2: {
  type: String,
},
textarea2: {
  type: String,
},
topic3: {
  type: String,
},
textarea3: {
  type: String,
},
topic4: {
  type: String,
},
textarea4: {
  type: String,
},


})

const Talk = mongoose.model('talk', talkSchema);

module.exports = Talk;
