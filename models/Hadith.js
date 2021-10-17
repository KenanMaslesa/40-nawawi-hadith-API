const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HadithSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        number: Number,
        title: String,
        bosnianTitle: String,
        englishTitle: String,
        audio: String,
        duration: Number,
        arabic_hadith: Object,
        english_hadith: String,
        bosnian_hadith: String
    }
)

module.exports = mongoose.model('Hadith', HadithSchema)
