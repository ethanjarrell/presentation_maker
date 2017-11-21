const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defpatienceSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defpatienceSchema.plugin(timestamps);
const Defpatience = mongoose.model('defpatience', defpatienceSchema);

module.exports = Defpatience;
