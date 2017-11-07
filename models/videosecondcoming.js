const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videosecondcomingSchema = new Schema({

    video_url: {
      type: String,
    },

})
videosecondcomingSchema.plugin(timestamps);
const Videosecondcoming = mongoose.model('videosecondcoming', videosecondcomingSchema);

module.exports = Videosecondcoming;
