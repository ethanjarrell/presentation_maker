const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videobaptismSchema = new Schema({

    video_url: {
      type: String,
    },

})
videobaptismSchema.plugin(timestamps);
const Videobaptism = mongoose.model('videobaptism', videobaptismSchema);

module.exports = Videobaptism;
