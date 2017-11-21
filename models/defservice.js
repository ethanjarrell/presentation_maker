const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defserviceSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defserviceSchema.plugin(timestamps);
const Defservice = mongoose.model('defservice', defserviceSchema);

module.exports = Defservice;
