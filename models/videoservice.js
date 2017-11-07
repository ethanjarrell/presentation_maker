const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoserviceSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoserviceSchema.plugin(timestamps);
const Videoservice = mongoose.model('videoservice', videoserviceSchema);

module.exports = Videoservice;
