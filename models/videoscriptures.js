const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoscripturesSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoscripturesSchema.plugin(timestamps);
const Videoscriptures = mongoose.model('videoscriptures', videoscripturesSchema);

module.exports = Videoscriptures;
