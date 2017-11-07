const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videoprophetsSchema = new Schema({

    video_url: {
      type: String,
    },

})
videoprophetsSchema.plugin(timestamps);
const Videoprophets = mongoose.model('videoprophets', videoprophetsSchema);

module.exports = Videoprophets;
