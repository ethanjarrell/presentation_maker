const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videosacramentSchema = new Schema({

    video_url: {
      type: String,
    },

})
videosacramentSchema.plugin(timestamps);
const Videosacrament = mongoose.model('videosacrament', videosacramentSchema);

module.exports = Videosacrament;
