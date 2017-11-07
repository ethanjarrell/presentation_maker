const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videomiraclesSchema = new Schema({

    video_url: {
      type: String,
    },

})
videomiraclesSchema.plugin(timestamps);
const Videomiracles = mongoose.model('videomiracles', videomiraclesSchema);

module.exports = Videomiracles;
