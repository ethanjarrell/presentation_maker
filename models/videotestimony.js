const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videotestimonySchema = new Schema({

    video_url: {
      type: String,
    },

})
videotestimonySchema.plugin(timestamps);
const Videotestimony = mongoose.model('videotestimony', videotestimonySchema);

module.exports = Videotestimony;
