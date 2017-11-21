const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deffaithSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deffaithSchema.plugin(timestamps);
const Deffaith = mongoose.model('deffaith', deffaithSchema);

module.exports = Deffaith;
