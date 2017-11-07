const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videofastingSchema = new Schema({

    video_url: {
      type: String,
    },

})
videofastingSchema.plugin(timestamps);
const Videofasting = mongoose.model('videofasting', videofastingSchema);

module.exports = Videofasting;
