const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defprayerSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defprayerSchema.plugin(timestamps);
const Defprayer = mongoose.model('defprayer', defprayerSchema);

module.exports = Defprayer;
