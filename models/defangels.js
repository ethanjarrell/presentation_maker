const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defangelsSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defangelsSchema.plugin(timestamps);
const Defangels = mongoose.model('defangels', defangelsSchema);

module.exports = Defangels;
