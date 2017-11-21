const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defselfrelianceSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defselfrelianceSchema.plugin(timestamps);
const Defselfreliance = mongoose.model('defselfreliance', defselfrelianceSchema);

module.exports = Defselfreliance;
