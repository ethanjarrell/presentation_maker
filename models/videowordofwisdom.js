const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videowordofwisdomSchema = new Schema({

    video_url: {
      type: String,
    },

})
videowordofwisdomSchema.plugin(timestamps);
const Videowordofwisdom = mongoose.model('videowordofwisdom', videowordofwisdomSchema);

module.exports = Videowordofwisdom;
