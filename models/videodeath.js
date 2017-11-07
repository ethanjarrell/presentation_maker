const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videodeathSchema = new Schema({

    video_url: {
      type: String,
    },

})
videodeathSchema.plugin(timestamps);
const Videodeath = mongoose.model('videodeath', videodeathSchema);

module.exports = Videodeath;
