const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoapostleSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoapostleSchema.plugin(timestamps);
const Videoapostle = mongoose.model('videoapostle', videoapostleSchema);

module.exports = Videoapostle;
