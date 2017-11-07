const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videochastitySchema = new Schema({

    video_url: {
      type: String,
    },

})
videochastitySchema.plugin(timestamps);
const Videochastity = mongoose.model('videochastity', videochastitySchema);

module.exports = Videochastity;
