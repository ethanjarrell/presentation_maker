const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videopioneerSchema = new Schema({

    video_url: {
      type: String,
    },

})
videopioneerSchema.plugin(timestamps);
const Videopioneer = mongoose.model('videopioneer', videopioneerSchema);

module.exports = Videopioneer;
