const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoselfrelianceSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoselfrelianceSchema.plugin(timestamps);
const Videoselfreliance = mongoose.model('videoselfreliance', videoselfrelianceSchema);

module.exports = Videoselfreliance;
