const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defatonementSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defatonementSchema.plugin(timestamps);
const Defatonement = mongoose.model('defatonement', defatonementSchema);

module.exports = Defatonement;
