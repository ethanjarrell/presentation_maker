const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const defgenealogySchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
defgenealogySchema.plugin(timestamps);
const Defgenealogy = mongoose.model('defgenealogy', defgenealogySchema);

module.exports = Defgenealogy;
