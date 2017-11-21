const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defmarriageSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defmarriageSchema.plugin(timestamps);
const Defmarriage = mongoose.model('defmarriage', defmarriageSchema);

module.exports = Defmarriage;
