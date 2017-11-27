const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const ldsscripturesSchema = new Schema({

    volume_id: Number,
    book_id: Number,
    chapter_id: Number,
    verse_id: Number,
    volume_title: String,
    book_title: String,
    volume_long_title: String,
    book_long_title: String,
    volume_subtitle: String,
    book_subtitle: String,
    volume_short_title: String,
    book_short_title: String,
    volume_lds_url: String,
    book_lds_url: String,
    chapter_number: Number,
    verse_number: Number,
    scripture_text: String,
    verse_title: String,
    verse_short_title: String,

})
ldsscripturesSchema.plugin(timestamps);
const Ldsscriptures = mongoose.model('ldsscriptures', ldsscripturesSchema);

module.exports = Ldsscriptures;
