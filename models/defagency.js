const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defagencySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defagencySchema.plugin(timestamps);
const Defagency = mongoose.model('defagency', defagencySchema);

module.exports = Defagency;
