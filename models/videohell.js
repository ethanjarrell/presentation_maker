const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videohellSchema = new Schema({

    video_url: {
      type: String,
    },

})
videohellSchema.plugin(timestamps);
const Videohell = mongoose.model('videohell', videohellSchema);

module.exports = Videohell;
