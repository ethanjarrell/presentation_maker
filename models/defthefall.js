const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defthefallSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defthefallSchema.plugin(timestamps);
const Defthefall = mongoose.model('defthefall', defthefallSchema);

module.exports = Defthefall;
