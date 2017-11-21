const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videopatienceSchema = new Schema({

    video_url: {
      type: String,
    },

})
videopatienceSchema.plugin(timestamps);
const Videopatience = mongoose.model('videopatience', videopatienceSchema);

module.exports = Videopatience;
