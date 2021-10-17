const express = require('express');
const router = express.Router();

const hadithController = require('../controllers/hadith')

//api/hadith
router.get('/', hadithController.getHadiths);
router.get('/:hadithId', hadithController.getHadithById);
router.post('/add-hadith', hadithController.addHadith);
router.put('/edit/:hadithId', hadithController.editHadith);
router.delete('/delete/:hadithId', hadithController.deleteHadith);

module.exports = router;