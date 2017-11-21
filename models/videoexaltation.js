const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoexaltationSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoexaltationSchema.plugin(timestamps);
const Videoexaltation = mongoose.model('videoexaltation', videoexaltationSchema);

module.exports = Videoexaltation;
