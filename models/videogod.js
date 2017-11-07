const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videogodSchema = new Schema({

    video_url: {
      type: String,
    },

})
videogodSchema.plugin(timestamps);
const Videogod = mongoose.model('videogod', videogodSchema);

module.exports = Videogod;
