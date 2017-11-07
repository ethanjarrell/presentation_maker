const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videogodheadSchema = new Schema({

    video_url: {
      type: String,
    },

})
videogodheadSchema.plugin(timestamps);
const Videogodhead = mongoose.model('videogodhead', videogodheadSchema);

module.exports = Videogodhead;
