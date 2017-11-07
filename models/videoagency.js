const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoagencySchema = new Schema({

    video_url: {
      type: String,
    },

})
videoagencySchema.plugin(timestamps);
const Videoagency = mongoose.model('videoagency', videoagencySchema);

module.exports = Videoagency;
