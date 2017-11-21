const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defapostleSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defapostleSchema.plugin(timestamps);
const Defapostle = mongoose.model('defapostle', defapostleSchema);

module.exports = Defapostle;
