const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deftempleSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deftempleSchema.plugin(timestamps);
const Deftemple = mongoose.model('deftemple', deftempleSchema);

module.exports = Deftemple;
