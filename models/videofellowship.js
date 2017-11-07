const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videofellowshipSchema = new Schema({

    video_url: {
      type: String,
    },

})
videofellowshipSchema.plugin(timestamps);
const Videofellowship = mongoose.model('videofellowship', videofellowshipSchema);

module.exports = Videofellowship;
