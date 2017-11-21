const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defheavenSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defheavenSchema.plugin(timestamps);
const Defheaven = mongoose.model('defheaven', defheavenSchema);

module.exports = Defheaven;
