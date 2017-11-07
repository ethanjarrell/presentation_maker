const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videorepentenceSchema = new Schema({

    video_url: {
      type: String,
    },

})
videorepentenceSchema.plugin(timestamps);
const Videorepentence = mongoose.model('videorepentence', videorepentenceSchema);

module.exports = Videorepentence;
