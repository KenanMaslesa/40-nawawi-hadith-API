const Hadith = require('../models/Hadith')
const mongoose = require('mongoose')

exports.addVideo = async (req, res) => {
  try {
    const newHadith = new Hadith({
      _id: new mongoose.Types.ObjectId(),
      bosnianTitle: req.body.bosnianTitle,
      englishTitle: req.body.englishTitle,
      audio: req.body.audio,
      duration: req.body.duration,
      english_hadith: req.body.english_hadith,
      bosnian_hadith: req.body.bosnian_hadith      ,
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
    const hadithId = req.params.hadithId;
    await Hadith.findOne({ _id: hadithId}).then((hadith) => {
    res.json(hadith)
    })
  }catch(err){
    res.status(500).send('Server error:' + err.message);
  }
}


exports.deleteHadith = async (req, res) => {
  try{
    const hadithId = req.params.hadithId;
    await Hadith.deleteOne({_id: hadithId}).then((result) => res.json(result));
  }catch(err){
    res.status(500).send('Server error');
  }
}

exports.editHadith = async (req, res) => {
  try{
    const hadithId = req.params.hadithId;
    const newData = req.body;
    await Hadith.updateOne({_id: hadithId}, newData).then((result) => res.json(result));
  }catch(err){
    res.status(500).send('Server error');
  }
}
