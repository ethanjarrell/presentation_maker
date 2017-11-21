const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defgatheringofisraelSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defgatheringofisraelSchema.plugin(timestamps);
const Defgatheringofisrael = mongoose.model('defgatheringofisrael', defgatheringofisraelSchema);

module.exports = Defgatheringofisrael;
