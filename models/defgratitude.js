const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defgratitudeSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defgratitudeSchema.plugin(timestamps);
const Defgratitude = mongoose.model('defgratitude', defgratitudeSchema);

module.exports = Defgratitude;
