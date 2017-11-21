const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defhonestySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defhonestySchema.plugin(timestamps);
const Defhonesty = mongoose.model('defhonesty', defhonestySchema);

module.exports = Defhonesty;
