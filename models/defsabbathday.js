const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defsabbathdaySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defsabbathdaySchema.plugin(timestamps);
const Defsabbathday = mongoose.model('defsabbathday', defsabbathdaySchema);

module.exports = Defsabbathday;
