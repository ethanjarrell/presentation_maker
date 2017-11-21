const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defsacramentSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defsacramentSchema.plugin(timestamps);
const Defsacrament = mongoose.model('defsacrament', defsacramentSchema);

module.exports = Defsacrament;
