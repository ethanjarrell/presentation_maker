const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videocreationSchema = new Schema({

    video_url: {
      type: String,
    },

})
videocreationSchema.plugin(timestamps);
const Videocreation = mongoose.model('videocreation', videocreationSchema);

module.exports = Videocreation;
