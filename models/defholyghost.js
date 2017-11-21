const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defholyghostSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defholyghostSchema.plugin(timestamps);
const Defholyghost = mongoose.model('defholyghost', defholyghostSchema);

module.exports = Defholyghost;
