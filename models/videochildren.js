const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videochildrenSchema = new Schema({

    video_url: {
      type: String,
    },

})
videochildrenSchema.plugin(timestamps);
const Videochildren = mongoose.model('videochildren', videochildrenSchema);

module.exports = Videochildren;
