const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deffastingSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deffastingSchema.plugin(timestamps);
const Deffasting = mongoose.model('deffasting', deffastingSchema);

module.exports = Deffasting;
