const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defgospelSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defgospelSchema.plugin(timestamps);
const Defgospel = mongoose.model('defgospel', defgospelSchema);

module.exports = Defgospel;
