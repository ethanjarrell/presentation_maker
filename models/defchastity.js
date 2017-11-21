const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defchastitySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defchastitySchema.plugin(timestamps);
const Defchastity = mongoose.model('defchastity', defchastitySchema);

module.exports = Defchastity;
