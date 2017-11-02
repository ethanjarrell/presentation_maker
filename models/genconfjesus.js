const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const genconfjesusSchema = new Schema({

  talk_title: {
    type: String,
  },
  year: {
    type: String,
  },
  author: {
    type: String,
  },
  position: {
    type: String,
  },
  image_url: {
    type: String,
  },
    talk_blurb: {
      type: String,
    },
    paragraph1: {
      type: String,
    },
    paragraph2: {
      type: String,
    },
    paragraph3: {
      type: String,
    },
    paragraph4: {
      type: String,
    },
    paragraph5: {
      type: String,
    },
    paragraph6: {
      type: String,
    },
    paragraph7: {
      type: String,
    },
    paragraph8: {
      type: String,
    },
    paragraph9: {
      type: String,
    },
    paragraph10: {
      type: String,
    },

})
genconfjesusSchema.plugin(timestamps);
const Genconfjesus = mongoose.model('genconfjesus', genconfjesusSchema);

module.exports = Genconfjesus;
