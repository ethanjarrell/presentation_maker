const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defgodSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defgodSchema.plugin(timestamps);
const Defgod = mongoose.model('defgod', defgodSchema);

module.exports = Defgod;
