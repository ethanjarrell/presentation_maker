const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defcharitySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defcharitySchema.plugin(timestamps);
const Defcharity = mongoose.model('defcharity', defcharitySchema);

module.exports = Defcharity;
