const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videopriesthoodSchema = new Schema({

    video_url: {
      type: String,
    },

})
videopriesthoodSchema.plugin(timestamps);
const Videopriesthood = mongoose.model('videopriesthood', videopriesthoodSchema);

module.exports = Videopriesthood;
