const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defrepentenceSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defrepentenceSchema.plugin(timestamps);
const Defrepentence = mongoose.model('defrepentence', defrepentenceSchema);

module.exports = Defrepentence;
