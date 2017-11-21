const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defdeathSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defdeathSchema.plugin(timestamps);
const Defdeath = mongoose.model('defdeath', defdeathSchema);

module.exports = Defdeath;
