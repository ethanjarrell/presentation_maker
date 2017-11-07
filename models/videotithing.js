const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videotithingSchema = new Schema({

    video_url: {
      type: String,
    },

})
videotithingSchema.plugin(timestamps);
const Videotithing = mongoose.model('videotithing', videotithingSchema);

module.exports = Videotithing;
