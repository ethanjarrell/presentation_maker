const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defmissionarySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defmissionarySchema.plugin(timestamps);
const Defmissionary = mongoose.model('defmissionary', defmissionarySchema);

module.exports = Defmissionary;
