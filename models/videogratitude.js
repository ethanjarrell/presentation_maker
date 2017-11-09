const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videogratitudeSchema = new Schema({

    video_url: {
      type: String,
    },

})
videogratitudeSchema.plugin(timestamps);
const Videogratitude = mongoose.model('videogratitude', videogratitudeSchema);

module.exports = Videogratitude;
