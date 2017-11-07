const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoheavenSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoheavenSchema.plugin(timestamps);
const Videoheaven = mongoose.model('videoheaven', videoheavenSchema);

module.exports = Videoheaven;
