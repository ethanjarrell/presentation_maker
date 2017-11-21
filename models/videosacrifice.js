const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videosacrificeSchema = new Schema({

    video_url: {
      type: String,
    },

})
videosacrificeSchema.plugin(timestamps);
const Videosacrifice = mongoose.model('videosacrifice', videosacrificeSchema);

module.exports = Videosacrifice;
