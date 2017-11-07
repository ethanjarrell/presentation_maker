const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videonativitySchema = new Schema({

    video_url: {
      type: String,
    },

})
videonativitySchema.plugin(timestamps);
const Videonativity = mongoose.model('videonativity', videonativitySchema);

module.exports = Videonativity;
