const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videogatheringofisraelSchema = new Schema({

    video_url: {
      type: String,
    },

})
videogatheringofisraelSchema.plugin(timestamps);
const Videogatheringofisrael = mongoose.model('videogatheringofisrael', videogatheringofisraelSchema);

module.exports = Videogatheringofisrael;
