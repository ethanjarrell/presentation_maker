const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defwomenSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defwomenSchema.plugin(timestamps);
const Defwomen = mongoose.model('defwomen', defwomenSchema);

module.exports = Defwomen;
