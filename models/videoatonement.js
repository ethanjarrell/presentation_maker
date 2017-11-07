const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoatonementSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoatonementSchema.plugin(timestamps);
const Videoatonement = mongoose.model('videoatonement', videoatonementSchema);

module.exports = Videoatonement;
