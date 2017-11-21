const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deffellowshipSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deffellowshipSchema.plugin(timestamps);
const Deffellowship = mongoose.model('deffellowship', deffellowshipSchema);

module.exports = Deffellowship;
