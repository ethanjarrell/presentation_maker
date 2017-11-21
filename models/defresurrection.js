const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defresurrectionSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defresurrectionSchema.plugin(timestamps);
const Defresurrection = mongoose.model('defresurrection', defresurrectionSchema);

module.exports = Defresurrection;
