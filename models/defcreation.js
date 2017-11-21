const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defcreationSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defcreationSchema.plugin(timestamps);
const Defcreation = mongoose.model('defcreation', defcreationSchema);

module.exports = Defcreation;
