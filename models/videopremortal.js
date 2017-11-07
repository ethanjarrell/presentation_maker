const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videopremortalSchema = new Schema({

    video_url: {
      type: String,
    },

})
videopremortalSchema.plugin(timestamps);
const Videopremortal = mongoose.model('videopremortal', videopremortalSchema);

module.exports = Videopremortal;
