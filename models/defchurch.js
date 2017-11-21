const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defchurchSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defchurchSchema.plugin(timestamps);
const Defchurch = mongoose.model('defchurch', defchurchSchema);

module.exports = Defchurch;
