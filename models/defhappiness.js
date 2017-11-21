const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defhappinessSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defhappinessSchema.plugin(timestamps);
const Defhappiness = mongoose.model('defhappiness', defhappinessSchema);

module.exports = Defhappiness;
