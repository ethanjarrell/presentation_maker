const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defprophetsSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defprophetsSchema.plugin(timestamps);
const Defprophets = mongoose.model('defprophets', defprophetsSchema);

module.exports = Defprophets;
