const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videowomenSchema = new Schema({

    video_url: {
      type: String,
    },

})
videowomenSchema.plugin(timestamps);
const Videowomen = mongoose.model('videowomen', videowomenSchema);

module.exports = Videowomen;
