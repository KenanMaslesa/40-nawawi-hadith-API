const Hadith = require('../models/Hadith')
const mongoose = require('mongoose')

exports.addHadith = async (req, res) => {
  try {
    const newHadith = new Hadith({
      _id: new mongoose.Types.ObjectId(),
      number: req.body.number,
      bosnianTitle: req.body.bosnianTitle,
      englishTitle: req.body.englishTitle,
      audio: req.body.audio,
      duration: req.body.duration,
      english_hadith: req.body.english_hadith,
      bosnian_hadith: req.body.bosnian_hadith,
      arabic_hadith: req.body.arabic_hadith,
    })

    await newHadith.save().then((result) => {
      res.status(201).json(result)
    });

  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Desila se greška na serveru. Pokušajte ponovo.',
      },
    })
  }
}

exports.getHadiths = async (req, res) => {
  await Hadith.find().then((hadiths) => {
    res.json(hadiths);
  })
}

exports.getHadithById = async (req, res) => {
  try{
    const hadithNumber = req.params.number;
    await Hadith.find({ number: hadithNumber}).then((hadith) => {
    res.json(hadith)
    })
  }catch(err){
    res.status(500).send('Server error:' + err.message);
  }
}

exports.search = async (req, res) => {
  const searchValue =  req.params.searchValue;
  console.log(searchValue)
  var query = {bosnianTitle: "Djela se vrednuju prema namjerama"}
  await Hadith.find(query).then((hadiths) => {
    res.json(hadiths);
  })
}


exports.deleteHadith = async (req, res) => {
  try{
    const hadithNumber = req.params.number;
    await Hadith.deleteMany({number: hadithNumber}).then((result) => res.json(result));
  }catch(err){
    res.status(500).send('Server error');
  }
}

exports.editHadith = async (req, res) => {
  try{
    const hadithNumber = req.params.number;
    const newData = req.body;
    await Hadith.updateOne({number: hadithNumber}, newData).then((result) => res.json(result));
  }catch(err){
    res.status(500).send('Server error');
  }
}
