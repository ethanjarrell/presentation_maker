const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defsecondcomingSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defsecondcomingSchema.plugin(timestamps);
const Defsecondcoming = mongoose.model('defsecondcoming', defsecondcomingSchema);

module.exports = Defsecondcoming;
