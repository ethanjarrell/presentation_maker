const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defgodheadSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defgodheadSchema.plugin(timestamps);
const Defgodhead = mongoose.model('defgodhead', defgodheadSchema);

module.exports = Defgodhead;
