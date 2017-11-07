const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoobedienceSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoobedienceSchema.plugin(timestamps);
const Videoobedience = mongoose.model('videoobedience', videoobedienceSchema);

module.exports = Videoobedience;
