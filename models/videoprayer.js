const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoprayerSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoprayerSchema.plugin(timestamps);
const Videoprayer = mongoose.model('videoprayer', videoprayerSchema);

module.exports = Videoprayer;
