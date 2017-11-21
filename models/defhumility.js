const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defhumilitySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defhumilitySchema.plugin(timestamps);
const Defhumility = mongoose.model('defhumility', defhumilitySchema);

module.exports = Defhumility;
