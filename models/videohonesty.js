const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videohonestySchema = new Schema({

    video_url: {
      type: String,
    },

})
videohonestySchema.plugin(timestamps);
const Videohonesty = mongoose.model('videohonesty', videohonestySchema);

module.exports = Videohonesty;
