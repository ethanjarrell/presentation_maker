const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videogospelSchema = new Schema({

    video_url: {
      type: String,
    },

})
videogospelSchema.plugin(timestamps);
const Videogospel = mongoose.model('videogospel', videogospelSchema);

module.exports = Videogospel;
