const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController')
const auth = require('../middleware/auth');
router.post('/',auth,categorieController.createCategorie);
router.put('/:id',auth, categorieController.updateOneCategorie);
router.get('/',auth, categorieController.getAllCategorie);
router.delete('/:id',auth, categorieController.deleteOneCategorie);
router.get('/:id',auth, categorieController.getOneCategorie);
module.exports = router;