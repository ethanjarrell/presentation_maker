const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videofamilySchema = new Schema({

    video_url: {
      type: String,
    },

})
videofamilySchema.plugin(timestamps);
const Videofamily = mongoose.model('videofamily', videofamilySchema);

module.exports = Videofamily;
