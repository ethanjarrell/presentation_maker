const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const imagegenauthgordonbhinckleySchema = new Schema({

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
imagegenauthgordonbhinckleySchema.plugin(timestamps);
const Imagegenauthgordonbhinckley = mongoose.model('imagegenauthgordonbhinckley', imagegenauthgordonbhinckleySchema);

module.exports = Imagegenauthgordonbhinckley;
