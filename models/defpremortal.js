const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defpremortalSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defpremortalSchema.plugin(timestamps);
const Defpremortal = mongoose.model('defpremortal', defpremortalSchema);

module.exports = Defpremortal;
