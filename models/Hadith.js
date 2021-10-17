const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HadithSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        id: Number,
        title: String,
        bosnianTitle: String,
        englishTitle: String,
        audio: String,
        duration: Number,
        arabic_hadith: {
            sentences: {
                arabic_text: String,
                english_text: String,
                bosnian_text: String,
                start_second: Number,
                end_second: Number,
            }
        },
        english_hadith: String,
        bosnian_hadith: String
    }
)

module.exports = mongoose.model('Hadith', HadithSchema)
