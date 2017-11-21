const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defscripturesSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defscripturesSchema.plugin(timestamps);
const Defscriptures = mongoose.model('defscriptures', defscripturesSchema);

module.exports = Defscriptures;
