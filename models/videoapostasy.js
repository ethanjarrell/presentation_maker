const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoapostasySchema = new Schema({

    video_url: {
      type: String,
    },

})
videoapostasySchema.plugin(timestamps);
const Videoapostasy = mongoose.model('videoapostasy', videoapostasySchema);

module.exports = Videoapostasy;
