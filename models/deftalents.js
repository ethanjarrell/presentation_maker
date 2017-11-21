const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deftalentsSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deftalentsSchema.plugin(timestamps);
const Deftalents = mongoose.model('deftalents', deftalentsSchema);

module.exports = Deftalents;
