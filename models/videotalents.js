const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videotalentsSchema = new Schema({

    video_url: {
      type: String,
    },

})
videotalentsSchema.plugin(timestamps);
const Videotalents = mongoose.model('videotalents', videotalentsSchema);

module.exports = Videotalents;
