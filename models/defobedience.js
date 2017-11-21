const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defobedienceSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defobedienceSchema.plugin(timestamps);
const Defobedience = mongoose.model('defobedience', defobedienceSchema);

module.exports = Defobedience;
