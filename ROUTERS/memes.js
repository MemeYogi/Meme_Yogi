const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const memescontroller = require('../CONTROLLERS/memescontroller');
const { fileUpload } = require('../middleware/file-upload');

router.get('/:memeid', memescontroller.MemesbyID);
router.get('/memer/:memerid', memescontroller.Memesbymemer);
router.get('/', memescontroller.Getallmemes);

router.post(
    '/',
    fileUpload.single('meme'),
  [
    check('Caption').isLength({ min: 5 }),
    check('Tags')
      .not()
      .isEmpty()
  ],memescontroller.CreateMEME
  
)
router.patch(
    '/:memeid',
    [
      check('caption').isLength({ min: 5 }),
      check('Tags')
      .not()
      .isEmpty()
    ],
    memescontroller.ChangeMeme
);
router.delete('/:memeid', memescontroller.MEMEBEGONE);

module.exports = router;

