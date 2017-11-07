const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videocovenantsSchema = new Schema({

    video_url: {
      type: String,
    },

})
videocovenantsSchema.plugin(timestamps);
const Videocovenants = mongoose.model('videocovenants', videocovenantsSchema);

module.exports = Videocovenants;
