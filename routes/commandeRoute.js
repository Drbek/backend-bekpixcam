const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController')
const auth = require('../middleware/auth');
router.post('/',auth,commandeController.createCommande);
router.put('/:id',auth, commandeController.updateOneCommande);
router.get('/',auth, commandeController.getAllCommande);
router.delete('/:id',auth, commandeController.deleteOneCommande);
router.get('/:id',auth, commandeController.getOneCommande);
module.exports = router;