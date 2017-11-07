const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videogiftsofthespiritSchema = new Schema({

    video_url: {
      type: String,
    },

})
videogiftsofthespiritSchema.plugin(timestamps);
const Videogiftsofthespirit = mongoose.model('videogiftsofthespirit', videogiftsofthespiritSchema);

module.exports = Videogiftsofthespirit;
