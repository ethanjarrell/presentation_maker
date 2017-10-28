const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagegenauthspencerkimballSchema = new Schema({

  standard_work_location: {
    type: String,
  },
  scripture: [{
    book_and_verse_number: {
      type: String,
    },
    verse_text: {
      type: String,
    },
  }],
image_data: [{
  tag: [{
    type: String,
  }],
  image: {
    type: String,
  },
}],


})
imagegenauthspencerkimballSchema.plugin(timestamps);
const Imagegenauthspencerkimball = mongoose.model('imagegenauthspencerkimball', imagegenauthspencerkimballSchema);

module.exports = Imagegenauthspencerkimball;
