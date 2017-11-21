const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deftithingSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deftithingSchema.plugin(timestamps);
const Deftithing = mongoose.model('deftithing', deftithingSchema);

module.exports = Deftithing;
