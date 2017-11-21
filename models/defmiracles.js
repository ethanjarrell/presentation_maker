const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defmiraclesSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defmiraclesSchema.plugin(timestamps);
const Defmiracles = mongoose.model('defmiracles', defmiraclesSchema);

module.exports = Defmiracles;
