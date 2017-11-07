const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videothefallSchema = new Schema({

    video_url: {
      type: String,
    },

})
videothefallSchema.plugin(timestamps);
const Videothefall = mongoose.model('videothefall', videothefallSchema);

module.exports = Videothefall;
