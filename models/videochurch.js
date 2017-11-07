const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videochurchSchema = new Schema({

    video_url: {
      type: String,
    },

})
videochurchSchema.plugin(timestamps);
const Videochurch = mongoose.model('videochurch', videochurchSchema);

module.exports = Videochurch;
