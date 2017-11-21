const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defgiftsofthespiritSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defgiftsofthespiritSchema.plugin(timestamps);
const Defgiftsofthespirit = mongoose.model('defgiftsofthespirit', defgiftsofthespiritSchema);

module.exports = Defgiftsofthespirit;
