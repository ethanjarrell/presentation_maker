const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defbookofmormonSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defbookofmormonSchema.plugin(timestamps);
const Defbookofmormon = mongoose.model('defbookofmormon', defbookofmormonSchema);

module.exports = Defbookofmormon;
