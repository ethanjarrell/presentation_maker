const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defjesusSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defjesusSchema.plugin(timestamps);
const Defjesus = mongoose.model('defjesus', defjesusSchema);

module.exports = Defjesus;
