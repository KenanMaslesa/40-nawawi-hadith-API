const express = require('express');
const router = express.Router();

const hadithController = require('../controllers/hadith')

//api/hadith
router.get('/', hadithController.getHadiths);
router.get('/:number', hadithController.getHadithById);
router.post('/add-hadith', hadithController.addHadith);
router.put('/edit/:number', hadithController.editHadith);
router.delete('/delete/:number', hadithController.deleteHadith);

module.exports = router;