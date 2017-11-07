const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const videogenealogySchema = new Schema({

    video_url: {
      type: String,
    },

})
videogenealogySchema.plugin(timestamps);
const Videogenealogy = mongoose.model('videogenealogy', videogenealogySchema);

module.exports = Videogenealogy;
