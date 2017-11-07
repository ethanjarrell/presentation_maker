const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videocharitySchema = new Schema({

    video_url: {
      type: String,
    },

})
videocharitySchema.plugin(timestamps);
const Videocharity = mongoose.model('videocharity', videocharitySchema);

module.exports = Videocharity;
