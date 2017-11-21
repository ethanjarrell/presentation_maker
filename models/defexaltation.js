const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defexaltationSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defexaltationSchema.plugin(timestamps);
const Defexaltation = mongoose.model('defexaltation', defexaltationSchema);

module.exports = Defexaltation;
