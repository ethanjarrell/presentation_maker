const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deffinaljudgementSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deffinaljudgementSchema.plugin(timestamps);
const Deffinaljudgement = mongoose.model('deffinaljudgement', deffinaljudgementSchema);

module.exports = Deffinaljudgement;
