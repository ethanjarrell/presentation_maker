const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const scripturegenauthdabednarSchema = new Schema({

  standard_work_location: {
    type: String,
  },
    book_and_verse_number: {
      type: String,
    },
    verse_text: {
      type: String,
    },


})
scripturegenauthdabednarSchema.plugin(timestamps);
const Scripturegenauthdabednar = mongoose.model('scripturegenauthdabednar', scripturegenauthdabednarSchema);

module.exports = Scripturegenauthdabednar;
