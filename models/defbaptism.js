const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defbaptismSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defbaptismSchema.plugin(timestamps);
const Defbaptism = mongoose.model('defbaptism', defbaptismSchema);

module.exports = Defbaptism;
