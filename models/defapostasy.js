const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defapostasySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defapostasySchema.plugin(timestamps);
const Defapostasy = mongoose.model('defapostasy', defapostasySchema);

module.exports = Defapostasy;
