const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoholyghostSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoholyghostSchema.plugin(timestamps);
const Videoholyghost = mongoose.model('videoholyghost', videoholyghostSchema);

module.exports = Videoholyghost;
