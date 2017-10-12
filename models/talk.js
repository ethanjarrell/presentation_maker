const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const endingMineSchema = new Schema({

beginning: {
  type: String,
},
text: {
  type: String,
},
end: {
  type: String,
},


})

const EndingMine = mongoose.model('endingMine', endingMineSchema);

module.exports = EndingMine;
