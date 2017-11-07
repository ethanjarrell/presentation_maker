const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoangelsSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoangelsSchema.plugin(timestamps);
const Videoangels = mongoose.model('videoangels', videoangelsSchema);

module.exports = Videoangels;
