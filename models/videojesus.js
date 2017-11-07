const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videojesusSchema = new Schema({

    video_url: {
      type: String,
    },

})
videojesusSchema.plugin(timestamps);
const Videojesus = mongoose.model('videojesus', videojesusSchema);

module.exports = Videojesus;
