const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deftrialsSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deftrialsSchema.plugin(timestamps);
const Deftrials = mongoose.model('deftrials', deftrialsSchema);

module.exports = Deftrials;
