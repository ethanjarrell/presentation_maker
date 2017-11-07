const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videotempleSchema = new Schema({

    video_url: {
      type: String,
    },

})
videotempleSchema.plugin(timestamps);
const Videotemple = mongoose.model('videotemple', videotempleSchema);

module.exports = Videotemple;
