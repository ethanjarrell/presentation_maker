const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videofaithSchema = new Schema({

    video_url: {
      type: String,
    },

})
videofaithSchema.plugin(timestamps);
const Videofaith = mongoose.model('videofaith', videofaithSchema);

module.exports = Videofaith;
