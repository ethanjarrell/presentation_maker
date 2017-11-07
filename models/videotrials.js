const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videotrialsSchema = new Schema({

    video_url: {
      type: String,
    },

})
videotrialsSchema.plugin(timestamps);
const Videotrials = mongoose.model('videotrials', videotrialsSchema);

module.exports = Videotrials;
