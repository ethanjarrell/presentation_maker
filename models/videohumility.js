const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videohumilitySchema = new Schema({

    video_url: {
      type: String,
    },

})
videohumilitySchema.plugin(timestamps);
const Videohumility = mongoose.model('videohumility', videohumilitySchema);

module.exports = Videohumility;
