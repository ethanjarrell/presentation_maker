const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videobookofmormonSchema = new Schema({

    video_url: {
      type: String,
    },

})
videobookofmormonSchema.plugin(timestamps);
const Videobookofmormon = mongoose.model('videobookofmormon', videobookofmormonSchema);

module.exports = Videobookofmormon;
