const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videolordscovenantpeopleSchema = new Schema({

    video_url: {
      type: String,
    },

})
videolordscovenantpeopleSchema.plugin(timestamps);
const Videolordscovenantpeople = mongoose.model('videolordscovenantpeople', videolordscovenantpeopleSchema);

module.exports = Videolordscovenantpeople;
