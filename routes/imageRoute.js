const express = require('express')
const router = express.Router()
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
const imageController = require('../controllers/imageController')
router.post('/', auth, multer,imageController.uploaderImage)
module.exports = router;