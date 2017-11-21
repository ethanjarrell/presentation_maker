const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videofinaljudgementSchema = new Schema({

    video_url: {
      type: String,
    },

})
videofinaljudgementSchema.plugin(timestamps);
const Videofinaljudgement = mongoose.model('videofinaljudgement', videofinaljudgementSchema);

module.exports = Videofinaljudgement;
