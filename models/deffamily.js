const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deffamilySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deffamilySchema.plugin(timestamps);
const Deffamily = mongoose.model('deffamily', deffamilySchema);

module.exports = Deffamily;
