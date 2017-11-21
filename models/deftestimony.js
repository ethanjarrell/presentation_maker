const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deftestimonySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deftestimonySchema.plugin(timestamps);
const Deftestimony = mongoose.model('deftestimony', deftestimonySchema);

module.exports = Deftestimony;
