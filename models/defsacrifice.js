const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defsacrificeSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defsacrificeSchema.plugin(timestamps);
const Defsacrifice = mongoose.model('defsacrifice', defsacrificeSchema);

module.exports = Defsacrifice;
