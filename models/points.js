const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const pointsSchema = new Schema({

user: {
  type: String,
  ref: 'User',
},
points: {
  type: Number,
},

})
pointsSchema.plugin(timestamps);
const Points = mongoose.model('points', pointsSchema);

module.exports = Points;
