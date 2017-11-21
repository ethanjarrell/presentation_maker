const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videosabbathdaySchema = new Schema({

    video_url: {
      type: String,
    },

})
videosabbathdaySchema.plugin(timestamps);
const Videosabbathday = mongoose.model('videosabbathday', videosabbathdaySchema);

module.exports = Videosabbathday;
