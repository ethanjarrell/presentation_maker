const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defnativitySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defnativitySchema.plugin(timestamps);
const Defnativity = mongoose.model('defnativity', defnativitySchema);

module.exports = Defnativity;
