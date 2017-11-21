const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defcovenantsSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defcovenantsSchema.plugin(timestamps);
const Defcovenants = mongoose.model('defcovenants', defcovenantsSchema);

module.exports = Defcovenants;
