const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoresurrectionSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoresurrectionSchema.plugin(timestamps);
const Videoresurrection = mongoose.model('videoresurrection', videoresurrectionSchema);

module.exports = Videoresurrection;
