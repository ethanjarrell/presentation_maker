const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defhellSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defhellSchema.plugin(timestamps);
const Defhell = mongoose.model('defhell', defhellSchema);

module.exports = Defhell;
