const express = require('express');
const router = express.Router();
const themeController = require('../controllers/themeController')
const auth = require('../middleware/auth');
router.post('/',auth,themeController.createTheme);
router.put('/:id',auth, themeController.updateOneTheme);
router.get('/',auth, themeController.getAllTheme);
router.delete('/:id',auth, themeController.deleteOneTheme);
router.get('/:id',auth, themeController.getOneTheme);
module.exports = router;