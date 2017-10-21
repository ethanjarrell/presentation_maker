const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const splashinfoSchema = new Schema({

link_url: {
  type: String,
},
image_url: {
  type: String,
},
title_text: {
  type: String,
},
blurb_text: {
  type: String,
},


})
splashinfoSchema.plugin(timestamps);
const Splashinfo = mongoose.model('splashinfo', splashinfoSchema);

module.exports = Splashinfo;
