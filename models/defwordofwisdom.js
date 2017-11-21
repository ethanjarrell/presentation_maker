const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defwordofwisdomSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defwordofwisdomSchema.plugin(timestamps);
const Defwordofwisdom = mongoose.model('defwordofwisdom', defwordofwisdomSchema);

module.exports = Defwordofwisdom;
