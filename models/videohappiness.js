const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videohappinessSchema = new Schema({

    video_url: {
      type: String,
    },

})
videohappinessSchema.plugin(timestamps);
const Videohappiness = mongoose.model('videohappiness', videohappinessSchema);

module.exports = Videohappiness;
