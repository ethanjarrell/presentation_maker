const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defchildrenSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defchildrenSchema.plugin(timestamps);
const Defchildren = mongoose.model('defchildren', defchildrenSchema);

module.exports = Defchildren;
