const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videomarriageSchema = new Schema({

    video_url: {
      type: String,
    },

})
videomarriageSchema.plugin(timestamps);
const Videomarriage = mongoose.model('videomarriage', videomarriageSchema);

module.exports = Videomarriage;
