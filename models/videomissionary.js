const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videomissionarySchema = new Schema({

    video_url: {
      type: String,
    },

})
videomissionarySchema.plugin(timestamps);
const Videomissionary = mongoose.model('videomissionary', videomissionarySchema);

module.exports = Videomissionary;
