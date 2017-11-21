const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defpioneerSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defpioneerSchema.plugin(timestamps);
const Defpioneer = mongoose.model('defpioneer', defpioneerSchema);

module.exports = Defpioneer;
