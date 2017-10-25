const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagegenealogySchema = new Schema({

image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagegenealogySchema.plugin(timestamps);
const Imagegenealogy = mongoose.model('imagegenealogy', imagegenealogySchema);

module.exports = Imagegenealogy;
