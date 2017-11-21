const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const deflordscovenantpeopleSchema = new Schema({

  modern_def: {
    type: String,
  },
  encyclo: {
    type: String,
  },

})
deflordscovenantpeopleSchema.plugin(timestamps);
const Deflordscovenantpeople = mongoose.model('deflordscovenantpeople', deflordscovenantpeopleSchema);

module.exports = Deflordscovenantpeople;
