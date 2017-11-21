const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defpriesthoodSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defpriesthoodSchema.plugin(timestamps);
const Defpriesthood = mongoose.model('defpriesthood', defpriesthoodSchema);

module.exports = Defpriesthood;
